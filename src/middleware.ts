import { config } from "./config";
import { ProductType } from "./data/shared";
import { productsList } from "./data/productsList";

interface DataResponse {
  data: ProductType[];
}

export async function loadProducts(): Promise<ProductType[]> {
  try {
    const response = await fetch(`${config.url}products/`, {
      method: "GET",
      headers: {
        Authorization: config.token,
      },
    });
    const { data }: DataResponse = await response.json();
    return data;
  } catch (error) {
    return productsList;
  }
}
