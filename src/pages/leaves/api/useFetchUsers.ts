import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
const API_VERSION = import.meta.env.VITE_APP_API_VERSION;

export const fetchUsers = async (params: Record<string, any> = {}) => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  try {
    const response = await axios.get(
      `${BASE_URL}/${API_VERSION}/users?${queryString}`
    );
    return response.data.data.result;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
};