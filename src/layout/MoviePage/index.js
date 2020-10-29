import { useState } from "react";
import MovieResults from "./components/MovieResults";
import MovieSearch from "./components/MovieSearch";
import "./MoviePage.css";
function MoviePage() {
  const [query, setQuery] = useState("");


  return (
    <div className="movie-wrapper">
      <MovieSearch
        query={query}
        setQuery={setQuery}
      />
      <MovieResults />
    </div>
  );
}

export default MoviePage;
