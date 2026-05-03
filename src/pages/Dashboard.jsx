import React from 'react'
import Sidebar from '../components/Sidebar'
import { CgProfile } from "react-icons/cg";
import usePlayerStore from '../store/usePlayerStore.js';
function Dashboard() {
  const {balance, reputation, total_income, total_expenses} = usePlayerStore()
  console.log(balance)
  console.log(reputation)
  console.log(total_expenses)
  console.log(total_income)
  return (
    <div className='w-full h-screen bg-(--lv-surface) flex'>
      <Sidebar active='dashboard'/>
      <div className='w-3/12 h-11/12 bg-(--lv-surface-2) ml-auto mr-4 my-auto rounded-xl flex '>
        <div className='w-full h-32 border-b-2 border-b-(--lv-border) flex items-center'>
          <CgProfile size={64} className='ml-6 text-(--lv-purple-dim) rounded-full' style={{boxShadow: "var(--lv-glow-md)"}} />
          <h1 className='text-2xl font-bold text-(--lv-text) font-serif ml-6 h-max' style={{textShadow: "var(--lv-glow-sm)"}}>Welcome {sessionStorage.getItem("username")}</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard