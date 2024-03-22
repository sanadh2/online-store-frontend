import { baseURL } from "./server";
import axios, { AxiosResponse, isAxiosError } from "axios";
import {
  ErrorResponseType,
  AddShoeType
} from "./types";

const baseApi = axios.create({
  baseURL:baseURL+"shoe",
  withCredentials: true,
});

// export const filterBookApi = async (
//   search: string | null | undefined,
//   page: number | null,
//   category: string | null,
//   rating: string | null,
//   language: string | null
// ) => {
//   try {
//     const response: AxiosResponse<FilterBooksResponseType> = await baseApi.get(
//       "/filter",
//       {
//         params: { s: search, page, category, rating, language },
//       }
//     );
//     const { data } = response;

//     return data;
//   } catch (error) {
//     console.error("An error occurred during login:", error);
//     if (axios.isAxiosError(error)) {
//       if (error.response) {
//         const data = error.response.data as ErrorResponseType;
//         throw data.msg;
//       } else {
//         throw error.message;
//       }
//     }
//   }
// };

// export const getBookDataApi = async (id: string) => {
//   try {
//     const response: AxiosResponse<GetBookResponseType> = await baseApi.get(
//       `/${id}`
//     );
//     const { data } = response;

//     return data.book;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       if (error.response) {
//         const data = error.response.data as ErrorResponseType;
//         throw data.msg;
//       } else {
//         throw error.message;
//       }
//     }
//     console.log(error);
//   }
// };

// export const top5BooksApi = async () => {
//   try {
//     const response: AxiosResponse<Top5BooksResponseType> =
//       await baseApi.get(`/top-4`);
//     const { data } = response;
//     return data.books;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       if (error.response) {
//         const data = error.response.data as ErrorResponseType;
//         throw new Error( data.msg);
//       } else {
//         throw new Error(error.message);
//       }
//     }
//   }
// };


export const addShoeApi=async(data:AddShoeType)=>{
  const formData=new FormData();
  formData.append("name",data.name)
  if(data.gender)
  formData.append("gender",data.gender)
  formData.append("brand",data.brand)
  if(data.category)
  formData.append("category",data.category)
  if(data.image) formData.append("image",data.image)
  formData.append("itemsLeft",data.itemsLeft)
  formData.append("price",data.price)

  try {
   await baseApi.postForm("/add-shoe",formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return true;
  } catch (error) {
    console.log(error)
    if(isAxiosError(error)){
      if(error.response ){
      const data = error.response.data as ErrorResponseType;
      throw new Error(data.msg);
      }
      else throw new Error(error.message)
    }
  }
}