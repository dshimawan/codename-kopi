import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function InventoryLayout({children}) {
  return (
    <section className='flex'>
        <Sidebar />
        {children}
    </section>
  )
}
