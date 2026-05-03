import React from 'react'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Loading from './Loading'

function WareHouses() {
  const [loading, setLoading] = useState(true)
  const [warehouses, setWarehouses] = useState([])
  const [ownedUIDs, setOwnedUIDs] = useState([])
  const UUID = sessionStorage.getItem("uuid")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [itemRes, ownedRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BACKEND}/item/get/warehouses`),
          fetch(`${import.meta.env.VITE_BACKEND}/item/check/warehouses`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ UUID })
          })
        ])
        const itemData = await itemRes.json()
        const ownedData = await ownedRes.json()


        setWarehouses(itemData.data || [])
        // extract UIDs from full owned item rows
        setOwnedUIDs((ownedData.data || []).map((w) => w.uid))
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const unowned = warehouses.filter(w => !ownedUIDs.includes(w.uid))

  return (
    loading ? <Loading message="Grabbing warehouse data" /> :
    <div className='w-full h-screen bg-(--lv-surface) flex'>
      <Sidebar active='datacenters' />
      <div className='flex-1 p-8 overflow-y-auto flex flex-col gap-4'>
        <h1 className='text-(--lv-text) text-xl font-bold font-mono'>Data Centers</h1>
        <p className='text-(--lv-muted) text-sm font-mono'>{unowned.length} locations available for purchase</p>
        {unowned.map(w => (
          <WarehouseItem key={w.uid} item={w} />
        ))}
      </div>
    </div>
  )
}

const WarehouseItem = ({ item }) => {
  return (
    <div className='w-full bg-(--lv-surface-2) border border-(--lv-border) rounded-xl p-5 flex justify-between items-center gap-6'>
      {/* left — name + description */}
      <div className='flex flex-col gap-1 w-64 flex-shrink-0'>
        <div className='flex items-center gap-2'>
          <span className='text-xs font-mono text-(--lv-muted) bg-(--lv-surface) px-2 py-0.5 rounded-full border border-(--lv-border)'>Tier {item.tier}</span>
          <span className='text-xs font-mono text-(--lv-muted)'>{item.uid}</span>
        </div>
        <span className='text-(--lv-text) font-bold text-base'>{item.name}</span>
        <span className='text-(--lv-muted) text-xs font-mono leading-relaxed'>{item.description}</span>
      </div>

      {/* middle — specs */}
      <div className='flex gap-6 flex-1'>
        <div className='flex flex-col gap-1'>
          <span className='text-(--lv-muted) text-xs font-mono'>Rack Slots</span>
          <span className='text-(--lv-text) font-mono font-bold'>{item.rCap}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-(--lv-muted) text-xs font-mono'>Power</span>
          <span className='text-(--lv-text) font-mono font-bold'>{item.powerCapacity.toLocaleString()}W</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-(--lv-muted) text-xs font-mono'>Cooling</span>
          <span className='text-(--lv-text) font-mono font-bold'>{item.coolingCapacity.toLocaleString()}W</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-(--lv-muted) text-xs font-mono'>Uplink</span>
          <span className='text-(--lv-text) font-mono font-bold'>{item.networkUplink}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-(--lv-muted) text-xs font-mono'>Monthly Upkeep</span>
          <span className='text-(--lv-danger) font-mono font-bold'>${item.monthlyUpkeep.toLocaleString()}/mo</span>
        </div>
      </div>

      {/* right — price + buy */}
      <div className='flex flex-col items-end gap-2 flex-shrink-0'>
        <span className='text-(--lv-text) font-bold text-lg font-mono'>
          {item.price === 0 ? 'Free' : `$${item.price.toLocaleString()}`}
        </span>
        <button
          className='px-6 h-9 rounded-lg bg-(--lv-purple) text-(--lv-text) text-sm font-mono hover:bg-(--lv-purple-dim) cursor-pointer border-none'
          style={{ boxShadow: 'var(--lv-glow-btn)' }}
        >
          {item.price === 0 ? 'Claim' : 'Purchase'}
        </button>
      </div>
    </div>
  )
}

export default WareHouses