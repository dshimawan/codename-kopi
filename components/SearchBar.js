import React from 'react'

export default function SearchBar() {
  return (
    <div className='grid lg:grid-cols-1 pt-20 pb-2'>
        <div className="rounded-xl bg-white p-4 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-4">
            <div className="mx-auto max-w-md">
            <form action="" className="relative mx-auto w-max">
                <input type="search" className="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-green-700 focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-green-700 peer-focus:stroke-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </form>
            </div>
        </div>
    </div>
  )
}
