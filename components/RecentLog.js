import { data } from '@/data/data'
import React from 'react'
import { HiOutlineTruck } from 'react-icons/hi'

export default function RecentLog() {
  return (
    <div className='w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll'>
      <h1 className='font-semibold'>Log Terbaru</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
          >
            <div className={
                order.log == 'Masuk'
                    ? 'bg-green-300 rounded-lg p-3'
                    : 'bg-red-300 rounded-lg p-3'
            }>
              <HiOutlineTruck className='text-gray-600' />
            </div>
            <div className='pl-4'>
              <p className='text-gray-800 font-bold'>{order.count}</p>
              <p className='text-gray-400 text-sm'>{order.name.origin}</p>
            </div>
            <p className='lg:flex md:hidden absolute right-6 text-sm'>{order.log}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
