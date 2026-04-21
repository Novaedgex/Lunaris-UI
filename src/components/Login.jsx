import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../pages/Loading'
const Login = ({ onChange }) => {
    const nav = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/user/login`, {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({ email, password })})
      const data = await res.json()
      if(data.status === "error") {setError(data.message)} 
      else{
        sessionStorage.setItem("uuid", data.user.uuid)
        sessionStorage.setItem("email", data.user.email)
        sessionStorage.setItem("username", data.user.username)
        sessionStorage.setItem("gn_auth", "true")
        nav("/dashboard")
      }
      setLoading(false)
    }
  return (
    loading ? <Loading message='Authenticating user...' /> :
    <div className='w-96 h-8/12 flex flex-col items-center bg-(--l-surface) rounded-xl border-2 border-(--l-border-lit)' style={{boxShadow: "var(--l-glow-md)"}}>
        <div className='flex items-center justify-center gap-2 w-full h-28'>
          <img src='/icon.png' className='w-16 h-16 rounded-full border-2 border-(--l-border-lit)' style={{boxShadow: "var(--l-glow-md)"}} />
          <h1 className='text-3xl font-bold text-(--l-text) font-serif ml-2' style={{textShadow: "var(--l-glow-sm)"}}>Lunaris</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 border-t-2 w-full border-(--l-border-lit)'>
          <h1 className='text-2xl font-bold text-(--l-text) font-serif mt-6' style={{textShadow: "var(--l-glow-sm)"}}>Login</h1>
          <h1 className='text-sm text-(--l-danger) font-serif mt-3'>{error}</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
          <input className='w-80 h-10 pl-2 rounded-xl bg-(--l-surface-2) border border-(--l-border) outline-none font-serif text-(--l-text) focus:border-(--l-border-lit) mb-6' style={{boxShadow: "var(--l-glow-input)"}} name='email' placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input className='w-80 h-10 pl-2 rounded-xl bg-(--l-surface-2) border border-(--l-border) outline-none font-serif text-(--l-text) focus:border-(--l-border-lit)' style={{boxShadow: "var(--l-glow-input)"}} name='password' placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <button className='w-80 h-10 rounded-xl bg-(--l-purple) text-(--l-text) font-serif mt-6 hover:bg-(--l-purple-dim)' style={{boxShadow: "var(--l-glow-btn)"}} onClick={handleSubmit}>Login</button>
        </form>
        <h1 className='text-sm text-(--l-muted) font-serif mt-3'>Don't have an account? <span onClick={onChange} className='text-(--l-info) font-semibold cursor-pointer'>Sign up</span></h1>
        {/* <h1 className='text-sm text-(--l-muted) font-serif mt-3'>Forgot password? <span className='text-(--l-info) font-semibold cursor-pointer'>Reset</span></h1> */}
    </div>
  )
}

export default Login