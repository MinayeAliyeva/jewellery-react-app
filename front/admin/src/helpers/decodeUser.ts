import { jwtDecode } from "jwt-decode";
interface IDecodedValue {
  isAdmin?: boolean;
  name?: string;
  email?: string;
}
export const decodeUser = (token?: string): IDecodedValue => {
  return token ? jwtDecode(token) : { isAdmin: false };
};
