import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";
import SearchBar from "../components/SearchBar";
import { useMemo, useState } from "react";
import type { Movie as m } from "../type/types";

function Home() {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");
  const [close, setClose] = useState(false);
  const [favarite, setFavarite] = useState<m[]>([]);

  const searchResult = useMemo(() => {
    if (search || genre) {
      let result = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()),
      );
      if (genre) {
        return result.filter((m) => m.genre === genre);
      } else if (genre === "") {
        return result;
      }
    } else {
      return movies;
    }
    return movies;
  }, [search, genre]);
  const deleteFilter = () => {
    setSearch("");
    setGenre("");
  };
  const clearCategory = () => {
    setGenre("");
    setClose((close) => !close);
  };
  const numbersMovies = searchResult.length;
  console.log("n", numbersMovies);


  const favariteMovie = (id: number) => {
    console.log("hey");
    const movie=movies.find((movie) => movie.id === id);
    console.log(favarite);
    localStorage.setItem("favarite",JSON.stringify(movie));
  };


  return (
    <div className="relative min-h-screen bg-blue-50 pt-6">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        deleteFilter={deleteFilter}
      />
      <DisplayFilter
        genre={genre}
        clearCategory={clearCategory}
        numbersMovies={numbersMovies}
      />
      <Movie searchResult={searchResult} favariteMovie={favariteMovie} />
    </div>
  );
}

export default Home;
