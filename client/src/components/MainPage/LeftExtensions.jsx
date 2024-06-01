import React from 'react'

const AnExtension = () => {
    return (
        <div className="mt-2 rounded-md bg-black w-full h-32 bg-black">

        </div>
    )
}

const LeftExtensions = () => {
  return (
    <div className="mt-6 ml-6 overflow-y-scroll no-scrollbar">
        <h1>Your Extensions</h1>
        <AnExtension />
        <AnExtension />
        <AnExtension />
        <AnExtension />
    </div>
  )
}

export default LeftExtensions
