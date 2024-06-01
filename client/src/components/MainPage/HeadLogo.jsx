import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeadLogo = () => {

  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">
        <h1 className="text-4xl font-bold text-gray-800 mt-4 ml-6">
            travel<span className="text-blue-500">UV</span>
        </h1>
    </div>
  )
}

export default HeadLogo
