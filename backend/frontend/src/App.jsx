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

       element={ authUser?(<div className='flex h-screen'>
         <Left/>
          <Right/>
           </div>
       ):(<Navigate to={"/login"} />)}/>

    
       <Route path='/login' element={authUser? <Navigate to="/"/>:<Login/>}/>

    <Route path='/Signup' element={ authUser?<Navigate to="/"/>:<Signup/>}/>


    
    
   
   </Routes>
  {/* <Loading/> */}

    </> )
}

export default App
