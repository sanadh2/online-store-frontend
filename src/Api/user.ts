import {baseURL} from './server'
import { SignUpData } from "../Pages/Authentication/SignUp";
import { FormData as SignInData } from "../Pages/Authentication/SignIn";
import axios, { AxiosResponse } from "axios";
import type {
  SignInResponseType,
  ErrorResponseType,
  GetUserResponseType,
} from "./types";

const baseApi = axios.create({
  baseURL:baseURL+"user",
  withCredentials: true,
});

export const signUpApi = async (data: SignUpData, avatar: File | undefined) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phoneNumber", String(data.phoneNumber));
  formData.append("city", data.city);
  formData.append("state", data.state);
  formData.append("postalCode", data.postalCode);
  formData.append("country", data.country);
  if (avatar) formData.append("avatar", avatar);
  try {
    const response = await baseApi.postForm("/sign-up/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("An error occurred during sign up:", error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw "something went wrong";
      }
    }
  }
};

export const loginApi = async (formData: SignInData) => {
  try {
    const response: AxiosResponse<SignInResponseType> =
      await baseApi.post<SignInResponseType>("/sign-in/", formData);
    const { data } = response;
    return data.token;
  } catch (error) {
    console.error("An error occurred during login:", error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw error.message;
      }
    }
  }
};

export const logOutApi = async () => {
  try {
    await baseApi.delete("/sign-out/");
  } catch (error) {
    console.error("An error occurred during fetchingUser:", error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw "something went wrong";
      }
    }
  }
};
export const getUserApi = async () => {
  try {
    const response: AxiosResponse<GetUserResponseType> =
      await baseApi.get<GetUserResponseType>("/get-user/");
    const { data } = response;
    return data.user;
  } catch (error) {
    console.error("An error occurred during fetchingUser:", error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw "something went wrong";
      }
    }
  }
};

export const getRefreshTokenApi = async () => {
  try {
    const response: AxiosResponse<GetUserResponseType> =
      await baseApi.get<GetUserResponseType>("/refresh-token/");
    const { data } = response;
    return data.user;
  } catch (error) {
    console.error("An error occurred during fetchingUser:", error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data as ErrorResponseType;
        throw data.msg;
      } else {
        throw "something went wrong";
      }
    }
  }
};
// export const updateUser=async()=>{
//   try {
//     const response: AxiosResponse<{success:false,msg:string}> =
//       await baseApi.patchForm<GetUserResponseType>("/update-user");
//     const { data } = response;
//     return data.user;
//   } catch (error) {
//     console.error("An error occurred during fetchingUser:", error);
//     if (axios.isAxiosError(error)) {
//       if (error.response) {
//         const data = error.response.data as ErrorResponseType;
//         throw data.msg;
//       } else {
//         throw "something went wrong";
//       }
//     }
//   }
// }
