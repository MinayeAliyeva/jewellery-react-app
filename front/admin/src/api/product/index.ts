import axios, { AxiosResponse } from "axios";
import { IProductsParams, IProductsResponse } from "./modules";

const BASE_URL = "https://dummyjson.com";
export const getAllProducts = ({
  limit,
}: IProductsParams): Promise<AxiosResponse<IProductsResponse, any>> => {
  if (!limit) {
    return axios.get<IProductsResponse>(`${BASE_URL}/products`);
  }
  return axios.get<IProductsResponse>(`${BASE_URL}/products?limit=${limit}`);
};
