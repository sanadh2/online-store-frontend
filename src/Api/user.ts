import {baseURL} from './server'
import { SignUpData } from "../Pages/Authentication/SignUp";
import { FormData as SignInData } from "../Pages/Authentication/SignIn";
import axios, { AxiosResponse } from "axios";
import type {
  SignInResponseType,
  ErrorResponseType,
  GetUserResponseType,
  UpdateUserResponseType,
} from "./types";
import { initialStateType as UpdateuserType } from '../Pages/Profile/EditProfile';
const baseApi = axios.create({
  baseURL:baseURL+"user",
  withCredentials: true,
});

export const signUpApi = async (data: SignUpData) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("phoneNumber", String(data.phoneNumber));
  formData.append("city", data.city);
  formData.append("state", data.state);
  formData.append("postalCode", data.postalCode);
  formData.append("country", data.country);
  if(data.gender)  formData.append("gender",data.gender);
  if (data.avatar) formData.append("avatar", data.avatar);
  try {
    const response:AxiosResponse<{success:boolean,message:string}> = await baseApi.postForm("/sign-up/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.message;
  } catch (error) {
    console.error("An error occurred during sign up:", error);
    if (axios.isAxiosError(error) && error.response) {
        const data = error.response.data as ErrorResponseType;
        throw new Error(data.msg);
      } else {
        throw new Error("something went wrong");
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
export const updateUserApi=async(data:Partial<UpdateuserType>)=>{
  const formData = new FormData();
  data.name && formData.append("name", data.name);
   data.email && formData.append("email", data.email);
   data.password&&formData.append("password", data.password);
   data.phoneNumber&&formData.append("phoneNumber", String(data.phoneNumber));
   data.city&&formData.append("city", data.city);
   data.state&&formData.append("state", data.state);
   data.postalCode&&formData.append("postalCode", data.postalCode);
   data.country&&formData.append("country", data.country);
   if (data.avatar) formData.append("avatar", data.avatar);
  try {
    const response: AxiosResponse<UpdateUserResponseType> =
      await baseApi.patchForm<UpdateUserResponseType>("/update-user",formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    const { data } = response;
    return data.msg;
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
}
