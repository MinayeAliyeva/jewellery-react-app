import axios from "axios";

const USERS_URL = "https://dummyjson.com/users";
export const getAllUsers = ({ limit }: { limit?: string }) => {
  console.log({ limit });
  if (!limit) {
    return axios.get(`${USERS_URL}`);
  }
  return axios.get(`${USERS_URL}?limit=${limit}`);
};
