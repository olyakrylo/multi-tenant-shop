import { config } from "./config";
import { Product, ProductWithId } from "./data/shared";
import { productsList } from "./data/productsList";

export async function loadProducts(): Promise<ProductWithId[]> {
  try {
    const response = await fetch(`${config.url}products/`, {
      method: "GET",
      headers: {
        Authorization: config.token,
      },
    });
    const data: ProductWithId[] = await response.json();
    return data;
  } catch (error) {
    return productsList;
  }
}

export async function login(username: string, password: string): Promise<string> {
  try {
    const response = await fetch(`${config.url}login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      })
    });

    const { token }: { token: string } = await response.json();
    return token;
  } catch (error) {
    return "";
  }
}

export async function add(product: Product): Promise<ProductWithId | null> {
  try {
    const response = await fetch(`${config.url}products/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: config.token,
      },
      body: JSON.stringify(product),
    });

    const data: ProductWithId = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function update(product: ProductWithId): Promise<ProductWithId | null> {
  try {
    const response = await fetch(`${config.url}products/${product.id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: config.token,
      },
      body: JSON.stringify(product),
    });

    const data: ProductWithId = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export async function deleteItem(id: number): Promise<boolean> {
  try {
    const response = await fetch(`${config.url}products/delete/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: config.token,
      },
    });

    const { result }: { result: boolean } = await response.json();
    return result;
  } catch (error) {
    return false;
  }
}
