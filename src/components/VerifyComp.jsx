import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const VerifyComp = () => {
  const nav = useNavigate()
  const [status, setStatus] = useState('verifying') // 'verifying' | 'success' | 'error'
  const [message, setMessage] = useState('')

  useEffect(() => {
    const verify = async () => {
      // grab token from url
      const params = new URLSearchParams(window.location.search)
      const token = params.get('token')

      if (!token) {
        setStatus('error')
        setMessage('No verification token found in URL')
        return
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/user/verify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        })
        const data = await res.json()

        if (data.status === 'error') {
          setStatus('error')
          setMessage(data.message)
        }
      } catch (e) {
        setStatus('error')
        setMessage('Failed to connect to server')
      }
    }

    verify()
  }, [])

  return (
    <div className='w-96 flex flex-col items-center bg-(--lv-surface) rounded-xl border-2 border-(--lv-border-lit) p-10 gap-6'
      style={{ boxShadow: 'var(--lv-glow-md)' }}>

      {/* logo */}
      <div className='flex items-center gap-3'>
        <img src='/icon.png' className='w-10 h-10 rounded-full border-2 border-(--lv-border-lit)'
          style={{ boxShadow: 'var(--lv-glow-md)' }} />
        <h1 className='text-xl font-bold text-(--lv-text) font-serif'
          style={{ textShadow: 'var(--lv-glow-sm)' }}>Lunaris VPS</h1>
      </div>

      <div className='w-full h-px bg-(--lv-border-lit)' />

      {/* verifying state — spinning ring */}
      {status === 'verifying' && (
        <div className='flex flex-col items-center gap-4'>
          <div className='w-16 h-16 rounded-full border-4 border-(--lv-border-dim) border-t-(--lv-purple) animate-spin'
            style={{ boxShadow: 'var(--lv-glow-sm)' }} />
          <p className='text-(--lv-muted) text-sm font-mono tracking-widest'>Verifying your account...</p>
        </div>
      )}

      {/* success state */}
      {status === 'success' && (
        <div className='flex flex-col items-center gap-4'>
          <FaCheckCircle size={56} color='var(--lv-success)' style={{ filter: 'drop-shadow(0 0 12px rgba(34,197,94,0.5))' }} />
          <h2 className='text-xl font-bold text-(--lv-text) font-serif'>Email Verified</h2>
          <p className='text-(--lv-muted) text-sm font-mono text-center'>
            Your account has been verified successfully.<br />Redirecting to login...
          </p>
        </div>
      )}

      {/* error state */}
      {status === 'error' && (
        <div className='flex flex-col items-center gap-4'>
          <FaTimesCircle size={56} color='var(--lv-danger)' style={{ filter: 'drop-shadow(0 0 12px rgba(239,68,68,0.5))' }} />
          <h2 className='text-xl font-bold text-(--lv-text) font-serif'>Verification Failed</h2>
          <p className='text-(--lv-danger) text-sm font-mono text-center'>{message}</p>
          <button
            onClick={() => nav('/')}
            className='w-full h-10 rounded-xl bg-(--lv-purple) text-(--lv-text) font-serif hover:bg-(--lv-purple-dim)'
            style={{ boxShadow: 'var(--lv-glow-btn)' }}>
            Back to Login
          </button>
        </div>
      )}

    </div>
  )
}

export default VerifyComp