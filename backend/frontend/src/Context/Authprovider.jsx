import React, { createContext, useContext, useState } from 'react'
import cookies from "js-cookie"

export const AuthContext=createContext();
export function Authprovider({children}) {
    const intialUserState =cookies.get("jwt")||localStorage.getItem("ChatApp");
    const [authUser,setAuthUser]=useState(intialUserState? JSON.parse(intialUserState):undefined)

  return (
   
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
   
  )
}

export const useAuth=()=>useContext(AuthContext)
