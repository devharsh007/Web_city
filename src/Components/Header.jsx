import React from 'react'

export default function Header() {
  return (
      <div>
      <nav className=' border-4 m-auto flex list-none justify-between p-3 text-lg'>
        <li>Logo</li>
        <li><input className='border bg-inherit px-3 py-1 w-96 outline-none' type="text" placeholder='Search' id="" /></li>
        <div className='flex gap-2'>
        <li   className='px-2 py-1 bg-white text-black login hover:bg-zinc-600 hover:text-white'>Login</li>
        <li className='px-2 py-1 bg-white text-black login hover:bg-zinc-600 hover:text-white '>Sign up</li>
        </div>
          </nav>
    </div>
  )
}
