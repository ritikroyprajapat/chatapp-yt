import React from 'react'
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
     <div className='flex space-x-3 px-6 py-4'><label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg p-3 flex items-center gap-2 w-[80%]">
     <input type="text" className="grow" placeholder="Search" />  
     </label>

   <button><FaSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300' /></button></div>

    </div>
  )
}

export default Search
