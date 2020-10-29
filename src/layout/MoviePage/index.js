import { useEffect, useState } from "react";
import dataSource from '../../data';
import MovieResults from "./components/MovieResults";
import MovieSearch from "./components/MovieSearch";
import "./MoviePage.css";
function MoviePage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(dataSource);

  useEffect(() => {
    setData(data);
  }, []);
  const searchMovies = async (e) => {
    // e.preventDefault();
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    // try {
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   console.log(data);
    //   setMovies(data.results);
    // } catch (err) {
    //   console.error(err);
    // }
  };
  console.log(data)
  return (
    <div className="movie-wrapper">
      <MovieSearch
        searchMovies={searchMovies}
        query={query}
        setQuery={setQuery}
      />
      <MovieResults data={data} />
    </div>
  );
}

export default MoviePage;
