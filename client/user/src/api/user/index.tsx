import axios from "axios";

const USERS_URL = "https://dummyjson.com/users";
export const getAllUsers = async ({ limit }: { limit?: string }) => {
  if (!limit) {
    return await axios.get(`${USERS_URL}`);
  }
  await axios
    .get(`${USERS_URL}?limit=${limit}`)
    .then((users) => console.log(users));
};
