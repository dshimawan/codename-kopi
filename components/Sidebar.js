'use client'

import React, { useState } from 'react'

import {
    MdOutlineSpaceDashboard,
    MdOutlineInventory2,
    MdOutlineLogout,
  } from 'react-icons/md'
import {HiOutlineTruck} from 'react-icons/hi'
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {GiCoffeeBeans} from 'react-icons/gi'
import Link from 'next/link'

export default function Sidebar() {
    const [open, setOpen] = useState(true)

  return (
    <div className="flex fixed z-20">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-green-700 h-screen p-5 pt-8 relative duration-300`}
      >
        <BsFillArrowLeftSquareFill
          className={`absolute cursor-pointer -right-3 top-9 w-9 h-9 border-green-700
           border-2 rounded-lg text-white bg-green-700 ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <GiCoffeeBeans
            className={`w-9 h-9 text-white cursor-pointer duration-200 ${
              open && "scale-100"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Dashboard Kopi
          </h1>
        </div>
        <div className='justify-start my-4 border-b border-gray-100 pb-4 pt-4 w-full'>
            <Link href='/dashboard'>
                <div className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
                    <MdOutlineSpaceDashboard className='text-3xl text-white group-hover:text-white'/>
                    <h3 className={`${!open && "hidden"} origin-left duration-200 text-base text-white group-hover:text-white font-semibold`}>
                        Dashboard
                    </h3>
                </div>
            </Link>
            <Link href='/inventory'>
                <div className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
                    <MdOutlineInventory2 className='text-3xl text-white group-hover:text-white'/>
                    <h3 className={`${!open && "hidden"} origin-left duration-200 text-base text-white group-hover:text-white font-semibold`}>
                        Inventory
                    </h3>
                </div>
            </Link>
            <Link href='/log'>
                <div className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
                    <HiOutlineTruck className='text-3xl text-white group-hover:text-white'/>
                    <h3 className={`${!open && "hidden"} origin-left duration-200 text-base text-white group-hover:text-white font-semibold`}>
                        Log
                    </h3>
                </div>
            </Link>
        </div>
        <div className='w-full'>
            <Link href='/login'>
                <div className='flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 border border-gray-200'>
                    <MdOutlineLogout className='text-3xl text-white group-hover:text-white'/>
                    <h3 className={`${!open && "hidden"} origin-left duration-200 text-base text-white group-hover:text-white font-semibold`}>
                        Logout
                    </h3>
                </div>
            </Link>
        </div>
      </div>
    </div>
  )
}
