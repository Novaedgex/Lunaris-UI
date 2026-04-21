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
    <div className='w-full h-screen flex items-center justify-center grid-2 bg-(--lv-surface)'>
        <h1 className='text-4xl font-bold text-(--lv-text) font-serif' style={{textShadow: "var(--lv-glow-sm)"}}>404 - Page not found</h1>
    </div>
  )
}

export default Lost