import MovieItem from "../MovieItem";
import "./MovieResults.css";

function MovieResults({ data }) {


  console.log(data);
  return (
    <div className="movie-items">
      {console.log(data)}
      {data.map((movie) => {
          console.log(movie)
        return (
          <MovieItem key={`${(Math.random()* Math.floor(10))}`} movie={movie} />
        );
      })}
    </div>
  );
}

export default MovieResults;
