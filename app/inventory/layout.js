import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function InventoryLayout({children}) {
  return (
    <section>
        <Sidebar />
        {children}
    </section>
  )
}
