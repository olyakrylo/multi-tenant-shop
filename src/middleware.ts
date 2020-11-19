import { config } from "./config";
import { ProductType } from "./data/shared";

interface DataResponse {
  data: ProductType[];
}

export async function loadProducts(): Promise<ProductType[]> {
  const response = await fetch(`${config.url}products/`, {
    method: "GET",
    headers: {
      Authorization: config.token,
    },
  });
  const { data }: DataResponse = await response.json();
  console.log(data);
  return data;
}
