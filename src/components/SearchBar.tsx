


type Props = {
  
    search:string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
    genre:string,
  setGenre: React.Dispatch<React.SetStateAction<string>>
  deleteFilter: () => void

   

}
const movieGenres = ["همه ژانرها", "اکشن", "درام", "علمی تخیلی", "کمدی", "ترسناک", "عاشقانه","معمایی","جنگی"];
function SearchBar({search,setSearch,setGenre, genre,deleteFilter}:Props) {
 

  
  return (
 <div className="absolute top-30  w-[calc(100%-100px)] mx-[50px] bg-white rounded-md shadow-md p-5">
  <input
    type="text"
    placeholder="جستجوی فیلم..."          value={search}
    onChange={(e)=>{setSearch(e.target.value)}}  className="w-1/4 mx-2 bg-white text-gray-700 placeholder:text-gray-400 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  <select value={genre} onChange={(e)=>{setGenre(e.target.value)}}
    className="w-1/4 mx-2 bg-white text-gray-700 border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    {movieGenres.map((genre)=><option key={genre} value={genre}>{genre}</option>)}
    
  </select>

  <button
    className="w-1/4 mx-2 bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
  onClick={deleteFilter}>
    پاک کردن فیلتر
  </button>
</div>
  )
}

export default SearchBar