import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loading from '../pages/Loading';

const VerifyComp = () => {
  const nav = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
      const res = await fetch(`${import.meta.env.VITE_BACKEND}/user/verify`, {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({ token: sessionStorage.getItem("token") })})
      const data = await res.json()
      if(data.status === "error") {setError(data.message)} 
      else{
        sessionStorage.setItem("uuid", data.user.uuid)
        sessionStorage.setItem("email", data.user.email)
        sessionStorage.setItem("username", data.user.username)
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("gn_auth", "true")

        nav("/dashboard")
      }
      setLoading(false)
    }
  return (
    loading ? <Loading message='Verifying user...' /> :
    <div className='w-96 h-8/12 flex flex-col items-center bg-(--lv-surface) rounded-xl border-2 border-(--lv-border-lit)' style={{boxShadow: "var(--lv-glow-md)"}}>
        <div className='flex items-center justify-center gap-2 w-full h-28'>
          <img src='/icon.png' className='w-16 h-16 rounded-full border-2 border-(--lv-border-lit)' style={{boxShadow: "var(--lv-glow-md)"}} />
          <h1 className='text-3xl font-bold text-(--lv-text) font-serif ml-2' style={{textShadow: "var(--lv-glow-sm)"}}>Lunaris VPS</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 border-t-2 w-full border-(--lv-border-lit)'>
          <h1 className='text-2xl font-bold text-(--lv-text) font-serif mt-6' style={{textShadow: "var(--lv-glow-sm)"}}>Verify your account</h1>
          <h1 className='text-sm text-(--lv-danger) font-serif mt-3'>{error}</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
          <input className='w-80 h-10 pl-2 rounded-xl bg-(--lv-surface-2) border border-(--lv-border) outline-none font-serif text-(--lv-text) focus:border-(--lv-border-lit) mb-6' style={{boxShadow: "var(--lv-glow-input)"}} name='email' placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <input className='w-80 h-10 pl-2 rounded-xl bg-(--lv-surface-2) border border-(--lv-border) outline-none font-serif text-(--lv-text) focus:border-(--lv-border-lit)' style={{boxShadow: "var(--lv-glow-input)"}} name='password' placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <button className='w-80 h-10 rounded-xl bg-(--lv-purple) text-(--lv-text) font-serif mt-6 hover:bg-(--lv-purple-dim)' style={{boxShadow: "var(--lv-glow-btn)"}} onClick={handleSubmit}>Verify</button>
        </form>
    </div>
  )
}

export default VerifyComp