import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaDatabase, FaKey } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ active = "dashboard" }) => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("username")
  return (
    <div className='w-48 h-screen bg-(--lv-surface-2) border-r-2 border-r-(--lv-border) flex flex-col items-center pt-4' style={{boxShadow: "var(--lv-glow-md)"}}>
        <img src='/icon.png' className='w-12 h-12 mb-4  rounded-full border-2 border-(--lv-border-lit)' style={{boxShadow: "var(--lv-glow-md)"}} />
        <h1 className='text-lg font-bold text-(--lv-text) font-serif mb-6' style={{textShadow: "var(--lv-glow-sm)"}}>Lunaris VPS</h1>
        <SidebarItem icon={<MdDashboard size={28}/>} label="Dashboard" isActive={active === "dashboard"} onClick={() => navigate("/dashboard")} />
        <SidebarItem icon={<FaDatabase size={23}/>} label="Database" isActive={active === "database"} onClick={() => navigate("/dashboard/database")} />
        <SidebarItem icon={<FaKey size={23}/>} label="Api keys" isActive={active === "keys"} onClick={() => navigate("/dashboard/keys")} />
    </div>
  )
}

const SidebarItem = ({icon, label, isActive, onClick}) => {
    return (
        <div onClick={onClick} className={`w-11/12 h-12 mb-3 flex items-center rounded-2xl cursor-pointer border border-(--lv-border) transition-all ${isActive ? 'text-(--lv-icon-bg) bg-(--lv-icon-hover)' : 'text-(--lv-icon-hover) bg-(--lv-icon-bg) hover:bg-(--lv-icon-hover) hover:text-(--lv-icon-bg)'}`}>
            <span className='w-10 h-10 flex justify-center items-center shrink-0'>{icon}</span>
            <span className=' font-serif font-medium'>{label}</span>
        </div>
    )
}
export default Sidebar