
import MovieCard from './MovieCard'
// import type { Movie } from "../type/types"
import type { Movie as MovieType } from "../types/movie";
type Props={
favarite:MovieType[];
   searchResult:MovieType[];
    favariteMovie:(id: number)=>void;
}

function Movie({searchResult, favariteMovie,favarite}:Props) {
  return (
    <div className="mx-[50px] mt-12 flex flex-wrap gap-8">
      {searchResult.map(movie=><MovieCard movie={movie} key={movie.id}  favariteMovie={favariteMovie} isFavarite={favarite.some(m=>m.id===movie.id)} />)}
        
    </div>
  )
}

export default Movie