'use client'

import { Disclosure } from '@headlessui/react'
import React from 'react'
import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'

import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdOutlineLogout,
} from 'react-icons/md'
import {HiOutlineTruck} from 'react-icons/hi'

export default function SideNavbar() {
  return (
    <div>
        <Disclosure defaultOpen as='nav'>
            <Disclosure.Button className='absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-green-700'>
              <GiHamburgerMenu className='block h-6 w-6' aria-hidden='true'/>
            </Disclosure.Button>
            <Disclosure.Panel className='p-6 w-fit h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer-focus:transition ease-out delay-150 duration-200'>
              <div className='flex flex-col justify-start items-center'>
                <h1 className='text-base text-center font-bold text-green-700 border-b border-gray-100 pb-4 w-full'>
                  DASHBOARD KOPI
                </h1>
                <div className='my-4 border-b border-gray-100 pb-4 w-full'>
                  <Link href='/dashboard'>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-green-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                      <MdOutlineSpaceDashboard className='text-2xl text-gray-600 group-hover:text-white'/>
                      <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        Dashboard
                      </h3>
                    </div>
                  </Link>
                  <Link href='/inventory'>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-green-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                      <MdOutlineInventory2 className='text-2xl text-gray-600 group-hover:text-white'/>
                      <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        Inventory
                      </h3>
                    </div>
                  </Link>
                  <Link href='/log'>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-green-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                      <HiOutlineTruck className='text-2xl text-gray-600 group-hover:text-white'/>
                      <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        Log
                      </h3>
                    </div>
                  </Link>
                </div>
                <div className='w-full'>
                  <Link href='/login'>
                    <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-green-700 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                      <MdOutlineLogout className='text-2xl text-gray-600 group-hover:text-white'/>
                      <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>
                        Logout
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
        </Disclosure>
    </div>
  )
}
