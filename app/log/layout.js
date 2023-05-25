import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function LogLayout({children}) {
  return (
    <section>
        <Sidebar />
        {children}
    </section>
  )
}
