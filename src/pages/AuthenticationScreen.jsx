import React from 'react'
import { useState, useEffect } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
function AuthenticationScreen() {
  const [view, setView] = useState('login')
  return (
    <div className='w-full h-screen bg-(--l-bg) flex items-center justify-center'>
      {view === 'login' ? <Login onChange={() => setView('signup')} /> : <Signup onChange={() => setView('login')} />}
    </div>
  )
}

export default AuthenticationScreen