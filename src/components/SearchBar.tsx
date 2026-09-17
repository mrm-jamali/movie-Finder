import React from 'react'

function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto bg-white rounded-md shadow-md p-5">
      <input
        type="text"
        placeholder="جستجوی فیلم..."
        className=" bg-white text-gray-700 placeholder:text-gray-400 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select>
        <option>همه ژانرها</option>
         <option>اکشن</option>
          <option>درام  </option>
      </select >
      <button className="absolute left-2 top-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        پاک کردن فیلتر 
      </button>
    </div>
  )
}

export default SearchBar