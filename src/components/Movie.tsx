
import MovieCard from './MovieCard'
// import type { Movie } from "../type/types"
import type { Movie as MovieType } from "../types/movie";
type Props={
  
   searchResult:MovieType[]
}

function Movie({searchResult}:Props) {
  return (
    <div className="mx-[50px] mt-12 flex flex-wrap gap-8">
      {searchResult.map(movie=><MovieCard movie={movie} />)}
        
    </div>
  )
}

export default Movie