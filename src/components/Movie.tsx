
import MovieCard from './MovieCard'
// import type { Movie } from "../type/types"
import type { Movie as MovieType } from "../types/movie";
type props={
   movies:MovieType[]
}

function Movie({movies}:props) {
  return (
    <div className="mx-[50px] mt-12 flex flex-wrap gap-8">
      {movies.map(movie=><MovieCard movie={movie} />)}
        
    </div>
  )
}

export default Movie