import { useState } from "react";


type Props = {
   movies:MovieType[],
    search:string,
    genre:string,
    setGenre:(genre:string)=>void,

    searchHandler:(value:string)=>void

}
const movieGenres = ["همه ژانرها", "اکشن", "درام", "علمی تخیلی", "کمدی", "ترسناک", "عاشقانه"];
function SearchBar({ movies,search, genre, setGenre, searchHandler}:Props) {
 

  
  return (
 <div className="absolute top-30  w-[calc(100%-100px)] mx-[50px] bg-white rounded-md shadow-md p-5">
  <input
    type="text"
    placeholder="جستجوی فیلم..."          value={search}
    onChange={(e)=>{searchHandler(e.target.value)}}  className="w-1/4 mx-2 bg-white text-gray-700 placeholder:text-gray-400 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select value={genre} onChange={(e)=>setGenre(e.target.value)}
    className="w-1/4 mx-2 bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {movieGenres.map((genre)=><option key={genre} value={genre}>{genre}</option>)}
    
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