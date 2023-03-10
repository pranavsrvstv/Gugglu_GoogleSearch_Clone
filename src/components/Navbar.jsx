import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search';

function Navbar({darkTheme,setDarkTheme}) {
  return (
    <div className='p-5 pb-0 flex flex-wrap  sm:justify-betweeen justify-center  items-center border-b dark:border-gray-700 border-gray-200'>
  
   <div className='flex justify-between items-center space-x-5 w-screen'>
    <Link to="/" >
      <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-9000'>
        Gugglu 🔍
      </p>
    </Link>
    
    <button type='button' onClick={()=>setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-2 py-1 hover:shadow-lg border-2 border-blue-200">
      {darkTheme?'Dark🌙':'Light💡'}
    </button>
   </div>
   <div className='w-full flex justify-between'>
   <Search/>
   </div>
   
    </div>
  )
}

export default Navbar
