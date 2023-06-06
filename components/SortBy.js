'use client'

import { Dropdown } from 'flowbite'
import React, { useEffect, useRef } from 'react'

export default function SortBy() {
  const ref = useRef(null)

  useEffect(() => {
    const targetEl = ref.current.dropdownDefaultRadio
    const triggerEl = ref.current.dropdownRadioButton
    
    const dropdown = new Dropdown(targetEl, triggerEl)
  }, [])
  
  
  return (
    <div className='flex justify-end pb-4 pr-4'>
      <button
        ref={ref}
        id="dropdownRadioButton"
        data-dropdown-toggle="dropdownDefaultRadio"
        className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Urutkan berdasar{" "}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        ref={ref}
        id="dropdownDefaultRadio"
        className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700"
          aria-labelledby="dropdownRadioButton"
        >
          <li>
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                defaultValue=""
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Terbaru
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                defaultChecked=""
                id="default-radio-2"
                type="radio"
                defaultValue=""
                name="default-radio"
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                Terlama
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
