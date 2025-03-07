import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  if (!token) {
    console.error("Token is missing or invalid");
    return null;
  }
  return jwtDecode(token);
};
