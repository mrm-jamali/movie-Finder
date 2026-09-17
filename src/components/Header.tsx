import React from 'react'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className="bg-blue-300  py-10">
        <h1 className='text-3xl font-bold text-center mb-4'>فیلم موردنظرتو پیدا کن</h1>
        <SearchBar />
    </div>
  )
}

export default Header