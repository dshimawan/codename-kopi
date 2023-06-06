import React from 'react'
import Link from "next/link";

export default function Login() {
  return (
    <main>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <div className="flex content-center overflow-hidden bg-white rounded-lg shadow-md">
          <div className='w-96 p-6'>
            <h1 className="text-3xl font-bold text-center text-green-700">Dashboard Kopi</h1>
            <form className="mt-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-green-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-green-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <Link href='/dashboard'>
              <div className="pt-4 mt-2">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-800">
                  Login
                </button>
              </div>
              </Link>
            </form>
          </div>
          <div className='w-80 bg-clip-border bg-cover bg-center bg-login-page'>
            
          </div>
        </div>
      </div>
    </main>
  );
}