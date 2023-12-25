import React from 'react'

export default function Header() {
  return (
      <div>
          <nav className=' border-4 m-auto flex list-none justify-around p-3 text-lg'>
              <li>Logo</li>
              <div className='  w-2/3 flex justify-evenly'>
              <li className='header_li'>WebCity</li>
              <li className='header_li'>Categaries</li>
              <li className='header_li'>About</li>
              <li><input className='border bg-inherit p-1 outline-none' type="text" placeholder='Search' id="" /></li>
              </div>
              <li className=' login header_li'>Login</li>
          </nav>
    </div>
  )
}
