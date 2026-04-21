import React, { useEffect, useState } from 'react'

function Loading({ message = 'Loading...' }) {

  return (
    <div className='w-screen h-screen bg-(--l-bg) flex flex-col items-center justify-center gap-8'>

      {/* spinning ring */}
      <div
        className='w-12 h-12 rounded-full border-2 border-(--l-border-dim) border-t-(--l-purple) animate-spin'
        style={{ boxShadow: 'var(--l-glow-sm)' }}
      />

      {/* message */}
      <div className='flex flex-col items-center gap-2'>
        <span
          className='text-(--l-text) text-sm font-mono tracking-widest'
          style={{ textShadow: 'var(--l-glow-sm)' }}
        >
          {message}
        </span>
        <span className='text-(--l-muted) text-xs font-mono'>Lunaris v26.1.0</span>
      </div>
    </div>
  )
}

export default Loading