import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDatabase, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ active = "dashboard" }) => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("username")
  return (
    <div className='w-48 h-screen bg-(--l-surface-2) border-r-2 border-r-(--l-border) flex flex-col items-center pt-4' style={{boxShadow: "var(--l-glow-md)"}}>
        <img src='/icon.png' className='w-12 h-12 mb-4  rounded-full border-2 border-(--l-border-lit)' style={{boxShadow: "var(--l-glow-md)"}} />
        <h1 className='text-lg font-bold text-(--l-text) font-serif mb-6' style={{textShadow: "var(--l-glow-sm)"}}>Lunaris</h1>
        <SidebarItem icon={<MdDashboard size={28}/>} label="Dashboard" isActive={active === "dashboard"} onClick={() => navigate("/dashboard")} />
        <SidebarItem icon={<FaDatabase size={23}/>} label="Database" isActive={active === "database"} onClick={() => navigate("/dashboard/database")} />
        <SidebarItem icon={<FaKey size={23}/>} label="Api keys" isActive={active === "keys"} onClick={() => navigate("/dashboard/keys")} />
    </div>
  )
}

const SidebarItem = ({icon, label, isActive, onClick}) => {
    return (
        <div onClick={onClick} className={`w-11/12 h-12 mb-3 flex items-center rounded-2xl cursor-pointer border border-(--l-border) transition-all ${isActive ? 'text-(--l-icon-bg) bg-(--l-icon-hover)' : 'text-(--l-icon-hover) bg-(--l-icon-bg) hover:bg-(--l-icon-hover) hover:text-(--l-icon-bg)'}`}>
            <span className='w-10 h-10 flex justify-center items-center shrink-0'>{icon}</span>
            <span className=' font-serif font-medium'>{label}</span>
        </div>
    )
}
export default Sidebar