import React from 'react'

// Background Image
import backgroundImage from '../assets/background_images/beautiful_sunset.jpg'

// Components
import LoginForm from '../components/Registration/LoginForm'

const LoginPage = () => {
  return (
    <div
      className="absolute bg-cover bg-center w-screen h-screen flex items-center justify-center"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <LoginForm />
    </div>
  )
}

export default LoginPage
