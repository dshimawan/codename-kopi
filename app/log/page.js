import { data } from '@/data/data'
import React from 'react'
import {
  TbPackageExport,
  TbPackageImport
 } from 'react-icons/tb';

export default function Log() {
  return (
    <main>
      <div className='pt-20 p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span>Barang</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Sisa Stock</span>
            <span className='hidden sm:grid'>Tanggal Distribusi</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className={
                    order.log == 'Masuk'
                      ? 'bg-green-300 p-3 rounded-lg'
                      : 'bg-red-300 p-3 rounded-lg'
                  }>
                    {
                      order.log == 'Masuk'
                        ? <TbPackageImport className='text-gray-600' />
                        : <TbPackageExport className='text-gray-600' />
                    }
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {order.count}
                    </p>
                    <p className='text-gray-800 text-sm'>{order.name.origin + ' ' + order.name.type}</p>
                  </div>
                </div>
                <p className='text-gray-600 font-semibold sm:text-left text-right'>
                  <span
                    className={
                      order.log == 'Masuk'
                        ? 'bg-green-300 p-2 rounded-lg'
                        : 'bg-red-300 p-2 rounded-lg'
                    }
                  >
                    {order.log}
                  </span>
                </p>
                <p className='hidden md:flex'>{order.stock}</p>
                <div className='sm:flex hidden justify-between items-center'>
                  <p>{order.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
