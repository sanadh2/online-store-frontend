export type AddShoeType= {
  name: string;
  brand: string;
  gender: 'boys' | 'girls' |'unisex'|"kids"|null;
  category: 'running' | 'football' | 'casual' | 'formal'|"";
  price: string;
  itemsLeft: string;
  image?: File
}

export interface UserType{
  role: 'admin' | 'user';
  name: string;
  email: string;
  avatar: string;
  phoneNumber: number;
  city: string;
  state: string;
  gender:'male'|'female'|'others',
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

export interface CartType{
  _id: string;
  // shoe:{}
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
