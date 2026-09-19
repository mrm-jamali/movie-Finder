

function SearchBar() {
  return (
 <div className="absolute top-25  w-[calc(100%-100px)] mx-[50px] bg-white rounded-md shadow-md p-5">
  <input
    type="text"
    placeholder="جستجوی فیلم..."
    className="w-1/4 mx-2 bg-white text-gray-700 placeholder:text-gray-400 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select
    className="w-1/4 mx-2 bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option>همه ژانرها</option>
    <option>اکشن</option>
    <option>درام</option>
  </select>

  <button
    className="w-1/4 mx-2 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    پاک کردن فیلتر
  </button>
</div>
  )
}

export default SearchBar