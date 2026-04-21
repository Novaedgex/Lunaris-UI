import React from 'react'
import Sidebar from '../components/Sidebar'
function ApiKeys() {
  return (
    <div className='w-full h-full bg-(--lv-surface) flex'>
        <Sidebar active='keys'/>
        <div className='ml-48 p-8 text-(--lv-text) font-serif'>
            <h1 className='text-3xl font-bold mb-4' style={{textShadow: "var(--lv-glow-sm)"}}>API Keys</h1>
            <p className='text-lg text-(--lv-muted)'>Manage your API keys here.</p>
        </div>
    </div>
  )
}

export default ApiKeys