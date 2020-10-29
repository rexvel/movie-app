import FavoriteIcon from '@material-ui/icons/Favorite';

function MovieItem({movie}) {
    
  const {title, description} = movie
    console.log()
  return (
    <div className="movie-container">
      <div className="movie-image"></div>
      <div className="movie-content">
        <div className="movie-title">{title}</div>
        <div className="movie-description">{description}</div>
        <div className="movie-like"><FavoriteIcon/></div>
      </div>
    </div>
  );
}

export default MovieItem;
