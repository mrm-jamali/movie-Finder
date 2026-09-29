import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";
import SearchBar from "../components/SearchBar";
import { useEffect, useMemo, useState } from "react";
import type { Movie as m } from "../type/types";

function Home() {
  const [search, setSearch] = useState("");

  const [genre, setGenre] = useState("");
  const [close, setClose] = useState(false);
const [favarite, setFavarite] = useState<m[]>(() => {
  const storedFavarite = localStorage.getItem("favarite");

  return storedFavarite ? JSON.parse(storedFavarite) : [];
});

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
  console.log("CLICK FAVORITE:", id);

  const movie = movies.find((movie) => movie.id === id);

  setFavarite((prev) => {
        const isFavorite = prev.some((movie) => movie.id === id);

    if (isFavorite) {
      return prev.filter((movie) => movie.id !== id);
    }

    const newFavarite = [...prev, movie];

    console.log("NEW FAVORITES:", newFavarite);

    return newFavarite;
  });
};

useEffect(()=>{
  localStorage.setItem("favarite",JSON.stringify(favarite))
},[favarite])

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
      <Movie searchResult={searchResult} favariteMovie={favariteMovie} favarite={favarite} />
    </div>
  );
}

export default Home;
