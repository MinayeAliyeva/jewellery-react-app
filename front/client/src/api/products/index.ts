import axios from "axios";
import { IProduct } from "./models";

export const PRODUCTS_URL = "https://dummyjson.com/products";
export const getAllProducts = (): Promise<IProduct[]> => {
  return axios.get(`${PRODUCTS_URL}`).then((res) => res.data.products);
};
