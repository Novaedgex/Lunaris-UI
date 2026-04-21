import React from 'react'
import { useNavigate } from 'react-router-dom';
function Lost() {
    const nav = useNavigate();
    React.useEffect(() => {
        setTimeout(() => {
            nav("/dashboard")
        }, 5000)
    }, [])
  return (
    <div className='w-full h-screen flex items-center justify-center grid-2 bg-(--l-surface)'>
        <h1 className='text-4xl font-bold text-(--l-text) font-serif' style={{textShadow: "var(--l-glow-sm)"}}>404 - Page not found</h1>
    </div>
  )
}

export default Lost