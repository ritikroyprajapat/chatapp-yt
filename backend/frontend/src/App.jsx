import React from 'react'
import Left from './home/leftpart/left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import Loading from './components/Loading'
import { useAuth } from './Context/Authprovider'
import { Route, Routes,Navigate } from "react-router-dom"
function App() {

  const[authUser,setAuthUser]=useAuth()
console.log(authUser)
  return (
    <>

    <Routes>
      <Route path='/'

       element={ authUser?(

      //  <div className='flex h-screen'>
      //    <Left/>
      //     <Right/>
      //      </div>


        <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div>

      
      ):(<Navigate to={"/login"} />)}/>

    
       <Route path='/login' element={authUser? <Navigate to="/"/>:<Login/>}/>

    <Route path='/Signup' element={ authUser?<Navigate to="/"/>:<Signup/>}/>


    
    
   
   </Routes>
  {/* <Loading/> */}

    </> )
}

export default App
