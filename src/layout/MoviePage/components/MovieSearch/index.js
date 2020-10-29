import "./MovieSearch.css";

function MovieSearch({searchMovies, query, setQuery}) {
    

  return (
    <div className="movie-search">
      <form class="search-form" >
        <input
          class="search-form__input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button class="search-form__button">Найти</button>
      </form>
    </div>
  );
}

export default MovieSearch;
