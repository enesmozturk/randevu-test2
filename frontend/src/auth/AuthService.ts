import axios from "../api/axios";

export const login = async (phone: string, password: string) => {
  const response = await axios.post("/auth/login", { phone, password });
  return response.data; // { accessToken, refreshToken }
};
