import React, { createContext, useState, useContext } from 'react'

// Create the AuthContext
const AuthContext = createContext()

// AuthProvider component to provide the AuthContext to its children
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const signIn = () => {
    setIsAuthenticated(true)
  }

  const signOut = () => {
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use the AuthContext
const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth, AuthContext }