'use client'

import { Dropdown } from 'flowbite'
import React, { useEffect } from 'react'

export default function SortBy() {
  useEffect(() => {
    const $targetEl = document.getElementById('dropdownDefaultCheckbox')
    const $triggerEl = document.getElementById('dropdownCheckboxButton')
    const options = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        onHide: () => {
            console.log('dropdown has been hidden')
        },
        onShow: () => {
            console.log('dropdown has been shown')
        },
        onToggle: () => {
            console.log('dropdown has been toggled')
        }
    }
    const dropdown = new Dropdown($targetEl, $triggerEl, options)
  }, [])
  return (
    <div className='flex justify-end pb-4 pr-4'>
        <button id="dropdownCheckboxButton" data-dropdown-toggle="dropdownDefaultCheckbox" data-dropdown-trigger='click' className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Sort by <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdownDefaultCheckbox" className="z-10 hidden w-36 m bg-white divide-y divide-gray-100 rounded-lg shadow">
            <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
              <li>
                <div className="flex items-center">
                  <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"/>
                  <label for="checkbox-item-1" className="ml-2 text-sm font-medium">Newest</label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                    <input id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"/>
                    <label for="checkbox-item-2" className="ml-2 text-sm font-medium">Oldest</label>
                  </div>
              </li>
            </ul>
        </div>
    </div>
  )
}
