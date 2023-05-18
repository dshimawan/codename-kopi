import React from 'react'

export default function TopCards() {
  return (
    <div className='grid lg:grid-cols-1 pt-20 p-4'>
       <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-3'>
                <p className='text-3xl font-bold pb-2'>Welcome to Dashboard!</p>
                <p className='text-lg text-gray-600'>Admin Arif</p>
            </div>
        </div>
    </div>
  )
}
