function MovieItem({ title }) {
  return (
    <div className="movie-container">
      <div className="movie-image"></div>
      <div className="movie-content">
        <div className="movie-title">{title}</div>
        <div className="movie-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          distinctio sequi iste nulla pariatur, veniam, dolorum veritatis
          nostrum sunt, quidem neque aliquam tempore labore voluptatum quas
          earum temporibus. Natus, minima.
        </div>
        <div className="movie-like"></div>
      </div>
    </div>
  );
}

export default MovieItem;
