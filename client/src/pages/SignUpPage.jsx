import React from 'react'

// Background Image
import backgroundImage from '../assets/background_images/beautiful_sunset.jpg'

// Components
import SignUpForm from '../components/Registration/SignUpForm'

const SignUpPage = () => {
  return (
    <div
      className="absolute bg-cover bg-center w-screen h-screen flex items-center justify-center"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
