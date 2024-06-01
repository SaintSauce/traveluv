import React from 'react'
import HeadLogo from '../components/MainPage/HeadLogo'

const CreatePage = () => {
  return (
    <div>
      <HeadLogo />
      <div className="flex justify-center items-center h-2/12 mt-6 p-4
                        inline-block border-t border-b border-gray-200 w-5/6 mx-auto">
          <h1>Create</h1>
      </div>
    </div>
  )
}

export default CreatePage
