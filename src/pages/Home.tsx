import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";
import SearchBar from "../components/SearchBar";
import { useState } from "react";


function Home() {
  const [search,setSearch]=useState("");
  const [searchedMovies,setSearchedMovies]=useState(movies);
   const [genre,setGenre]=useState("همه ژانرها")

  const searchHandler=(value:string)=>{
    setSearch(value)
      console.log(value)
    setSearchedMovies(movies.filter(movie=>movie.title.toLowerCase().includes(value.toLowerCase())))
// filteredMovies=movies.filter(movie=>)


  }
  return (
    <div className="relative min-h-screen bg-blue-50 pt-6">
      <Header />
       <SearchBar movies={movies} search={search} setSearch={setSearch}  searchHandler={searchHandler}/>
      <DisplayFilter />
      <Movie   movies={ searchedMovies} />
    </div>
  );
}

export default Home;
