import DataIO from '@/components/DataIO'
import SearchBar from '@/components/SearchBar'
import { data } from '@/data/data'
import React from 'react'
import {CiCoffeeBean} from 'react-icons/ci'

export default function Inventory() {

  return (
    <main className='w-full'>
      <div className='flex justify-end'>
        <DataIO />
        <SearchBar />
      </div>
      <div className='p-4 pt-2'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className='font-medium'>Origin</span>
            <span className='font-medium sm:text-left text-right'>Jenis</span>
            <span className='font-medium hidden md:grid'>Jumlah</span>
            <span className='font-medium hidden sm:grid'>Kadar Air</span>
          </div>  
          <ul>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='bg-green-300 p-3 rounded-lg'>
                            <CiCoffeeBean className='text-green-700' />
                        </div>
                        <p className='pl-4'>{order.name.origin}</p>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>{order.name.type}</p>
                    <p className='hidden md:flex'>{order.stock}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.water}</p>
                    </div>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
