import {baseURL} from './server'

import axios, { AxiosResponse } from "axios";
import { CartListResponseType, ErrorResponseType } from "./types";

const baseApi = axios.create({
  baseURL,
  withCredentials: true,
});

export const getCartListApi = async () => {
  try {
    const response: AxiosResponse<CartListResponseType> =
      await baseApi.get(`/user/cart-list`);
    const { data } = response;

    return data.cartList;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw error.message;
      }
    }
    console.error(error);
  }
};

export const removeFromCartListApi = async (id: string) => {
  try {
    await baseApi.delete(`/cart/delete-from-cart/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw error.message;
      }
    }
    console.error(error);
  }
};

export const addToCartListApi = async (id: string) => {
  try {
    await baseApi.post(`/cart/add-to-cart/${id}`);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw error.message;
      }
    }
    console.error(error);
  }
};
