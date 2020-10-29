import MovieResults from './components/MovieResults';
import MovieSearch from "./components/MovieSearch";
import "./MoviePage.css";
function MoviePage() {
  return (
    <div className="movie-wrapper">
      <MovieSearch />
      <MovieResults />
    </div>
  );
}

export default MoviePage;
