import React from 'react'
import { NavLink } from 'react-router-dom'


const links=[
    {url:'/search', text:'🔍 All'},
    {url:'/imagesearch',text:'🖼️ Images'
   }
]
const Links = () => {
  return (
    <div className='mt-4 flex justify-start w-full'>
      {links.map(({url,text})=>(
          <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 " className=" mx-4">
            {text}
          </NavLink>
      ))}
    </div>
  )
}

export default Links
