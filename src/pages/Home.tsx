import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";
import SearchBar from "../components/SearchBar";
import { useMemo, useState } from "react";

function Home() {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");

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

  return (
    <div className="relative min-h-screen bg-blue-50 pt-6">
      <Header />
      <SearchBar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
      />
      <DisplayFilter />
      <Movie searchResult={searchResult} />
    </div>
  );
}

export default Home;
