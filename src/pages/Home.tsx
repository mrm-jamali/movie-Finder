import Header from "../components/Header";
import DisplayFilter from "../components/DisplayFilter";
import Movie from "../components/Movie";
import { movies } from "../api/movie";


function Home() {
  return (
    <div className="min-h-screen bg-blue-50 pt-6">
      <Header />
      <DisplayFilter />
      <Movie   movies={ movies}  />
    </div>
  );
}

export default Home;
