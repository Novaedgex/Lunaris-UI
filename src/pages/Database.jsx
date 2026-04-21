import React from 'react'
import Sidebar from '../components/Sidebar'
function Database() {
  return (
    <div className='w-full h-full bg-(--l-surface) flex'>
        <Sidebar active='database'/>
        <div className='ml-48 p-8 text-(--l-text) font-serif'>
            <h1 className='text-3xl font-bold mb-4' style={{textShadow: "var(--l-glow-sm)"}}>Database</h1>
            <p className='text-lg text-(--l-muted)'>Manage your database here.</p>
        </div>
    </div>
  )
}

export default Database