import { PropsWithChildren, useEffect, useState } from "react"
import { ISingletonData, IUser, SingletonContext } from "../context/singleton-context"

export const SingletonProvider = ({children}:PropsWithChildren) =>{
    const [user,setUser] = useState<IUser | null>(null)
    const [refreshToken,setRefreshoken] = useState<string | null>("dkjhdjkhfd")
    const [token,setToken] = useState<string | null >("dmv mcn vn cnv")
    const [count,setCount] = useState<number>(0)

    useEffect(()=>{
        // api call get userRes
    //    if(userRes) setUser(userRes)
    },[])

    const updateRefreshToken = (token:string | null) => setRefreshoken(token)
    const updateToken = (token:string) => setToken(token)

    const updateUserData = (user:IUser | null) => setUser(user)

    const decrementCounter = () => {
        setCount((prev)=> (prev !== undefined && prev !== null ? prev - 1 : 0))
    }

    const increamentCounter = () =>{
       setCount((prev)=> (prev !== undefined && prev !== null ? prev + 1 : 1))
    }

    useEffect(()=>{
      if(count) setCount(count)
    },[count])
   

    const value:ISingletonData = {
       user,
       refreshToken,
       token,
       counter:count,
       updateRefreshToken,
       updateToken,
       updateUserData,
       increamentCounter,
       decrementCounter,
    }

    return <SingletonContext.Provider value={value}>{children}</SingletonContext.Provider>
}