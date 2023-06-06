'use client'

import React, { useEffect, useRef } from 'react'
import { Modal } from 'flowbite'

export default function DataIO() {
    const ref = useRef(null)

    useEffect(() => {
        const targetEl = ref.current.defaultModal

        const modal = new Modal(targetEl)
    }, [])

  return (
    <div className='pt-20 pr-2'>
        <div className="flex justify-center m-5">
            <button
            id="defaultModalButton"
            data-modal-toggle="defaultModal"
            className="block text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            >
            Tambah Data
            </button>
        </div>
        
        <div
            ref={ref}
            id="defaultModal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">

            <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">

                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                    Tambah Biji Kopi
                </h3>
                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    data-modal-toggle="defaultModal"
                >
                    <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
                </div>

                <form action="#">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                    <label
                        htmlFor="origin"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Origin
                    </label>
                    <input
                        type="text"
                        name="origin"
                        id="origin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        placeholder="Masukkan origin"
                        required=""
                    />
                    </div>
                    <div>
                    <label
                        htmlFor="air"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Kadar Air
                    </label>
                    <input
                        type="text"
                        name="air"
                        id="air"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        placeholder="Tingkat kadar air"
                        required=""
                    />
                    </div>
                    <div>
                    <label
                        htmlFor="jumlah"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Jumlah
                    </label>
                    <input
                        type="number"
                        name="jumlah"
                        id="jumlah"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                        placeholder="999"
                        required=""
                    />
                    </div>
                    <div>
                    <label
                        htmlFor="jenis"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Category
                    </label>
                    <select
                        id="jenis"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    >
                        <option selected="">Pilih jenis</option>
                        <option value="GB">Green Bean</option>
                        <option value="LR">Light Roast</option>
                        <option value="DR">Dark Roast</option>
                    </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="text-white inline-flex items-center bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                    Tambahkan
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}
