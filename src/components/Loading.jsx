import React from 'react'
import {Puff} from 'react-loader-spinner'
const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <Puff type="Puff" color="#00BFFF" height={55} width={85}/>
    </div>
  )
}

export default Loading
