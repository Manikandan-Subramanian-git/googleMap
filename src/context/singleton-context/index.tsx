import { createContext } from "react";

export interface IUser {
    email:string,
    password:string

}

export interface ISingleton {
    user:IUser | null
    refreshToken :  string | null
    token: string | null
    counter:number | null
}

export interface ISingletonData extends ISingleton{
  updateRefreshToken:(token:string)=>void
  updateToken:(token:string)=>void
  updateUserData:(user:IUser)=> void
  increamentCounter:()=>void
  decrementCounter:()=>void
}

export const SingletonContext = createContext<ISingletonData>({
  user:null,
  refreshToken:null,
  token:null,
  counter:null,
  increamentCounter:()=>{},
  decrementCounter:()=>{},
  updateRefreshToken:()=>{},
  updateToken:()=>{},
  updateUserData:()=>{}
})