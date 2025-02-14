import { authKey } from "@/constant/authKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { decodedToken } from "@/utils/jwt";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local.storage";

export const storeUserInfo = async ({
  accessToken,
}: {
  accessToken: string;
}) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  return removeFromLocalStorage(authKey);
};

// Get New Access Token
export const getNewAccessToke = async () => {
  return await axiosInstance({
    url: "http://localhost:3000/api/v1/auth/refreshToken",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
