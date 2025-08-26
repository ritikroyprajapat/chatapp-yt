import React from 'react'
import Search from "./Search"
import Users from './Users'
import Logout from './Logout'
function left() {
  return (
    <div className=' w-[30%]  bg-black'>
      <Search/>
      <div className="flex-1 overflow-y-auto"

      style={{minHeight:"74vh"}}>

     <Users/>
      </div>
    
      <Logout/>
    </div>
  )
}

export default left
