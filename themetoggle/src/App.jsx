
import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  return (
    <UserContextProvider>
      <h2 className='text-orange-700 p-5'>Hi</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
