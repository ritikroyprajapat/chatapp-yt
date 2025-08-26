import React, { useState } from 'react'
import axios from "axios"
import Cookies from "js-cookie"
function Logout() {

  const [loading,setLoading]=useState(false)
  const handleLogout=async()=>{
    setLoading(true)
  try {
      
    await axios.post("/api/user/logout");
    localStorage.removeItem("ChatApp");
    Cookies.remove("jwt")
    setLoading(false)
    alert("user logged out successfully")
    window.location.reload();
  } catch (error) {
    console.log("error in logout",error)
  }
  }

  return (
    <>
    
   
    <button className="btn btn-circle btn-outline mx-4 my-5" onClick={handleLogout}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
      
       />
  </svg>
</button>
    

    </>
  )
  
}

export default Logout
