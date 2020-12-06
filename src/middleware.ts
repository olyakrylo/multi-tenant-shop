import { config } from "./config";
import { Product, ProductWithId } from "./data/shared";

const token = `Token ${config.token}`;

type Method = "GET" | "POST" | "DELETE";

type TokenResponse = { token: string };

type DeleteResponse = { result: boolean };

export async function loadProducts(): Promise<ProductWithId[]> {
  try {
    return await request<ProductWithId[]>("GET", "products", []);
  } catch (error) {
    return [];
  }
}

export async function login(username: string, password: string): Promise<string> {
  try {
    const body = JSON.stringify({ username, password });
    const { token } = await request<TokenResponse>("POST", "login", { token: "" }, body);
    return token === config.token ? token : "";
  } catch (error) {
    return "";
  }
}

export async function add(product: Product): Promise<ProductWithId | null> {
  try {
    const body = JSON.stringify(product);
    return await request<ProductWithId | null>("POST", "products/create", null, body);
  } catch (error) {
    return null;
  }
}

export async function update(product: ProductWithId): Promise<ProductWithId | null> {
  try {
    const body = JSON.stringify(product);
    return await request<ProductWithId | null>("POST",`products/update/${product.id}`, null, body);
  } catch (error) {
    return null;
  }
}

export async function deleteItem(id: number): Promise<boolean> {
  try {
    const { result } = await request<DeleteResponse>("DELETE", `products/delete/${id}`, { result: false });
    return result;
  } catch (error) {
    return false;
  }
}

async function request<T>(method: Method, path: string, defaultReturn: T, body?: string): Promise<T> {
  const response = await fetch(`${config.url}${path}/`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body,
  });

  if (!response.ok) {
    return Promise.resolve(defaultReturn);
  }
  return await response.json() as Promise<T>;
}
