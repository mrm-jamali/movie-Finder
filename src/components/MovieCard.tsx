import type { Movie } from "../types/movie";
import { Heart } from "lucide-react";

type Props = {
  movie: Movie;
    favariteMovie:(id:number)=>void;
    isFavarite:boolean;
};

function MovieCard({ movie, favariteMovie, isFavarite }: Props) {
  return (
    <div className="w-64  bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={movie.image}
        alt="انتقام جویان"
        className="w-full h-50 object-cover bg-gray-200"
      />

      <div className="p-4 text-right">
        <div className="flex justify-between cursor-pointer  items-center" >
  <h3 className="text-lg font-bold text-gray-800 mb-2">{movie.title}</h3>
  <span>
<Heart size={20} onClick={()=>{favariteMovie(movie.id)}}  color={isFavarite ? "black" : "gray"} fill={isFavarite ? "red" : "white"} />
  </span>

        </div>
      
        <span className="bg-blue-100 mb-3 text-blue-600 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
          {movie.genre}
        </span>
        <p className="text-sm text-gray-500 mb-1">{movie.year}</p>

        <p className="text-sm text-yellow-600 font-semibold mb-2">
          {movie.rating}
        </p>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {movie.description}
        </p>

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
          مشاهده جزئیات
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
