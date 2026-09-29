import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import type { Movie as m } from "../type/types";

function Favorites() {
  const [resultFavarite, setResultFavarite] = useState<m[]>([]);
  console.log("RESULT FAVORITE:", resultFavarite);
  useEffect(()=>{  let f = localStorage.getItem("favarite");
    setResultFavarite(f? JSON.parse(f) : []);
    console.log("favariteMovie", f);
    console.log("hello");},
[])
  

  
  return (
    <div className="mx-[50px] mt-12 flex flex-wrap gap-8"> 
      {resultFavarite.map((movie) => (<MovieCard isFavarite={true} movie={movie} favariteMovie={()=>{}} />))}
    </div>
  );
}

export default Favorites;
