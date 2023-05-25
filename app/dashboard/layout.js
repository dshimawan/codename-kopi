import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <section>
        <Sidebar />
        {children}
    </section>
  )
}
