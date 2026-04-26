import React from 'react'
import { useState } from 'react'
const PasswordRest = () => {
  const [email, setEmail] = useState('')
  const sendEmail = () => {
    fetch(`${import.meta.env.VITE_BACKEND}/user/password-reset`, {method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({ email })})
  }
  return (
    <div className='w-full h-screen bg-(--lv-surface) flex'>
        <div className='w-96 h-8/12 flex flex-col items-center bg-(--lv-surface) rounded-xl border-2 border-(--lv-border-lit) m-auto' style={{boxShadow: "var(--lv-glow-md)"}}>
            <div className='flex items-center justify-center gap-2 w-full h-28'>
                <img src='/icon.png' className='w-16 h-16 rounded-full border-2 border-(--lv-border-lit)' style={{boxShadow: "var(--lv-glow-md)"}} />
                <h1 className='text-3xl font-bold text-(--lv-text) font-serif ml-2' style={{textShadow: "var(--lv-glow-sm)"}}>Lunaris VPS</h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 border-t-2 w-full border-(--lv-border-lit)'>
                <form className='flex flex-col items-center justify-center w-full'>
                    <h1 className='text-2xl font-bold text-(--lv-text) font-serif mt-6' style={{textShadow: "var(--lv-glow-sm)"}}>Password Reset</h1>
                    <input className='w-80 h-10 pl-2 rounded-xl bg-(--lv-surface-2) border border-(--lv-border) outline-none font-serif text-(--lv-text) focus:border-(--lv-border-lit) mb-6 mt-4' style={{boxShadow: "var(--lv-glow-input)"}} name='email' placeholder='Email' type='email' onChange={setEmail} required />
                    <button className='w-80 h-10 rounded-xl bg-(--lv-purple) text-(--lv-text) font-serif mt-6 hover:bg-(--lv-purple-dim)' style={{boxShadow: "var(--lv-glow-btn)"}} onClick={sendEmail}>Send Reset Email</button>
                </form>
                <h1 className='text-sm text-(--lv-muted) font-serif mt-3'>Remembered your password? <span className='text-(--lv-info) font-semibold cursor-pointer'>Login</span></h1>
                <h1 className='text-sm text-(--lv-muted) font-serif mt-3'>Don't have an account? <span className='text-(--lv-info) font-semibold cursor-pointer'>Sign up</span></h1>
            </div>
        </div>
        
    </div>
  )
}

export default PasswordRest