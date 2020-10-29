import { MdFavorite } from "react-icons/md";
import "./MovieItem.css";
function MovieItem({ movie }) {
  const { title, description, posterurl } = movie;
  console.log();
  return (
    <div className="movie-container">
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${posterurl}`}
        alt=""
      />
      <div className="movie-content">
        <div className="movie-description">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="movie-like">
          <MdFavorite />
        </div>
      </div>
    </div>
  );
}

export default MovieItem;
