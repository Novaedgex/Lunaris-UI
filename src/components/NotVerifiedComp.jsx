import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const NotVerifiedComp = () => {
    const nav = useNavigate();
    useEffect(() => {
        const checkVerification = async () => {
            const UUID = localStorage.getItem("UUID")
            const res = await fetch(`${import.meta.env.VITE_BACKEND}/user/check`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({UUID})
            })
            const data = await res.json()
            if (data.status === "success") {
                nav("/dashboard")
            }
            if (data.status === "error") {
                console.log(data.message)
            }
        }
        checkVerification()
    }, [])
  return (
    <div className='w-full h-screen bg-(--lv-surface) flex'>
        <div className='m-auto w-max p-6 bg-(--lv-surface-2) border-(--lv-border-lit) border-2 rounded-lg text-center' style={{boxShadow: "var(--lv-glow-md)"}}>
            <h1 className='text-2xl font-bold mb-4 text-(--lv-text)'>Email Not Verified</h1>
            <p className=' mb-6 text-(--lv-text)'>Please check your email for a verification link.</p>
        </div>
    </div>
  )
}

export default NotVerifiedComp