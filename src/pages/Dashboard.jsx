import React from 'react'
import Sidebar from '../components/Sidebar'
import { CgProfile } from "react-icons/cg";
function Dashboard() {
  return (
    <div className='w-full h-screen bg-(--l-surface) flex'>
      <Sidebar active='dashboard'/>
      <div className='w-3/12 h-11/12 bg-(--l-surface-2) ml-auto mr-4 my-auto rounded-xl flex '>
        <div className='w-full h-32 border-b-2 border-b-(--l-border) flex items-center'>
          <CgProfile size={64} className='ml-6 text-(--l-purple-dim) rounded-full' style={{boxShadow: "var(--l-glow-md)"}} />
          <h1 className='text-2xl font-bold text-(--l-text) font-serif ml-6 h-max' style={{textShadow: "var(--l-glow-sm)"}}>Welcome {sessionStorage.getItem("username")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard