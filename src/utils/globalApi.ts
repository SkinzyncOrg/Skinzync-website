import axios, { AxiosInstance, AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000", // TODO: Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// NOTE: User

export const registerUser = async (
  email: string,
  password: string,
  company: string
) => {
  try {
    const response = await axiosClient.post("/auth/register", {
      email,
      password,
      company,
    });
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || { message: "Error occurred during registration." }
    );
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosClient.post(
      "/auth/login",
      { email, password },
      { withCredentials: true }
    );
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
    return (
      error.response?.data || {
        message: "Error occurred while fetching products.",
      }
    );
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await axiosClient.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        message: "Error occurred while fetching the product.",
      }
    );
  }
};

export const getProductByCategory = async (category: string) => {
  try {
    const response = await axiosClient.get(`/products/category/${category}`);
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        message: "Error occurred while fetching products by category.",
      }
    );
  }
};

// NOTE: Cart

export const getUserCartItems = async () => {
  try {
    const { data } = await axiosClient.get("/cart/get-cart");
    console.log(data);
    return data.cart;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "Error occurred while fetching cart items."
    );
  }
};

export const addToCart = async (variant_id: number, quantity: number) => {
  try {
    const response = await axiosClient.post("/cart/create-cart", {
      variant_id,
      quantity,
    });
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        message: "Error occurred while adding item to the cart.",
      }
    );
  }
};

export const updateCartItem = async (
  cart_item_id: number,
  variant_id: number,
  quantity: number
) => {
  try {
    const { data } = await axiosClient.put(`/cart/${cart_item_id}`, {
      variant_id,
      quantity,
    });
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "Error occurred while updating the cart item."
    );
  }
};

export const deleteCartItem = async (cart_item_id: number) => {
  try {
    const { data } = await axiosClient.delete(`/cart/${cart_item_id}`);
    return data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message ||
        "Error occurred while deleting the cart item."
    );
  }
};

// NOTE: Orders
// TODO: address_id & cart_id (& payment_id)
export const createOrder = async (data: any) => {
  try {
    const response = await axiosClient.post(
      "/cart/confirm-cart/:cart_id",
      data
    );
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        message: "Error occurred while creating the order.",
      }
    );
  }
};

export const getOrderById = async (id: string) => {
  try {
    const response = await axiosClient.get(`/orders/${id}`);
    return response.data;
  } catch (error: any) {
    return (
      error.response?.data || {
        message: "Error occurred while fetching the order details.",
      }
    );
  }
};

export default {
  getProducts,
  getProductById,
  getProductByCategory,
  addToCart,
  updateCartItem,
  getUserCartItems,
  deleteCartItem,
  createOrder,
  registerUser,
  loginUser,
};
