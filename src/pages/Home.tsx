import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const [searchedMovies, setSearchedMovies] = useState(movies);
  const [genre, setGenre] = useState("");

  // const searchHandler = (value: string) => {
  //   setSearch(value);
  //   console.log(value);
  //   let searchValue = movies.filter((movie) =>
  //     movie.title.toLowerCase().includes(value.toLowerCase()),
  //   );

  //   setSearchedMovies(searchValue);
  // };

  const displyResult=(searchValue:string,genreValue:string)=>{
    setSearch(searchValue);
    setGenre(genreValue);
    if (searchValue || genreValue) {
      let result=movies.filter((movie)=>movie.title.toLowerCase().includes(searchValue.toLowerCase()))
      if  (genreValue) {
      let newResult=result.filter(m=>m.genre===genreValue)
      setSearchedMovies(newResult)}
      else if (genreValue==="") {
         setSearchedMovies(result)
      }
    }
    else {
       setSearchedMovies(movies)
    }
     
  }
  // const filterMovies = (value: string) => {
  //   if (genre) {
  //    let genreValue= movies.filter((movie) => movie.genre === value)
  //   }
  // };
  // const applyfilter=(searchValue,genreValue)=>{
  //  setSearchedMovies(result)
  // }
  return (
    <div className="relative min-h-screen bg-blue-50 pt-6">
      <Header />
      <SearchBar
        movies={movies}
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        displyResult={displyResult}
       
      
      />
      <DisplayFilter />
      <Movie movies={searchedMovies} />
    </div>
  );
}

export default Home;
