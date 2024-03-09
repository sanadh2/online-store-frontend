
export interface BookType{
  title: string;
  _id:string,
  description: string;
  author: string;
  category: string[];
  seller: string;
  imageUrl: string;
  rating: number;
  language: string;
  sold: number;
  pages: number;
  feature: boolean;
  discount: number;
  reviews: string[];
  price:number;
}

export interface UserType{
  role: 'admin' | 'user';
  name: string;
  email: string;
  avatar: string;
  phoneNumber: number;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  wishList: string[];
  cartList: string[];
  orders: string[];
}

export interface SignInResponseType{
  success:boolean;
  token:string;
}
export interface SignUpResponseType{
  msg:string;
  success:boolean;
}
export interface GetUserResponseType{
 success:true; 
  user:UserType;
}
export interface UpdateUserResponseType{
 success:boolean;
  msg:string;
}


export interface DeleteUserResponseType{
 success:boolean;
  msg:string;
}

export interface FilterBooksResponseType{
 success:boolean;
  nbh:number;
  books:BookType[];
  category:string[];
  language:string[];
}

export interface GetBookResponseType{
 success:boolean;
  book:BookType
}

export interface Top5BooksResponseType{
 success:boolean;
  books:BookType[];
}

export interface CartType{
  _id: string;
  book: {
    _id: string;
    title: string;
    description: string;
    author: string;
    category: string[];
    seller: string;
    imageUrl: string;
    rating: number;
    language: string;
    views: string[];
    sold: number;
    pages: number;
    feature: boolean;
    discount: number;
    reviews: string[];
    price: number;
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
  count: number;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CartListResponseType{
  success:boolean;
  cartList:CartType[];
}

export interface ErrorResponseType{
  msg:string;
  success:boolean;
}
