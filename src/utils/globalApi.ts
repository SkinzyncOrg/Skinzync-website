import axios, { AxiosInstance, AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000', // TODO: Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: Add the necessary API calls
// NOTE: User

export const registerUser = async (email:string, password:string, company:string) => {
  try {
    const response = await axiosClient.post("/auth/register", { email, password, company });
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred during registration." };
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosClient.post("/auth/login", { email, password }, { withCredentials: true });
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred during login." };
  }
};

// NOTE: Products

export const getProducts = async () => {
  try {
    const response = await axiosClient.get("/products");
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while fetching products." };
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axiosClient.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while fetching the product." };
  }
};

export const getProductByCategory = async (category: string) => {
  try {
    const response = await axiosClient.get(`/products/category/${category}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while fetching products by category." };
  }
};

// NOTE: Cart

export const addToCart = async (data: any) => {
  try {
    const response = await axiosClient.post("/cart/add", data);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while adding item to the cart." };
  }
};

export const getUserCartItems = async (userId: string) => {
  try {
    const response = await axiosClient.get("/cart");
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while fetching cart items." };
  }
};

export const deleteCartItem = async (id: string) => {
  try {
    const response = await axiosClient.delete(`/cart/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while deleting the cart item." };
  }
};

// NOTE: Orders

export const createOrder = async (data: any) => {
  try {
    const response = await axiosClient.post("/order/create", data);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while creating the order." };
  }
};

export const getOrderById = async (id: string) => {
  try {
    const response = await axiosClient.get(`/orders/${id}`);
    return response.data;
  } catch (error: any) {
    return error.response?.data || { message: "Error occurred while fetching the order details." };
  }
};


export default {
  getProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  getUserCartItems,
  deleteCartItem,
  createOrder,
  registerUser,
  loginUser,
};
