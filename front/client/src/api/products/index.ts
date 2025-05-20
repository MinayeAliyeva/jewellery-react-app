import axios, { AxiosResponse } from "axios";
import { IProductResponseDto } from "./models";

export const PRODUCTS_URL = "https://dummyjson.com/products";
export const getAllProducts = (): Promise<
  AxiosResponse<IProductResponseDto>
> => {
  return axios.get<IProductResponseDto>(`${PRODUCTS_URL}`);
};
