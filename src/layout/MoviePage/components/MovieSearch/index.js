
import "./MovieSearch.css";

function MovieSearch({ searchMovies, query, setQuery }) {

  return (
    <div className="movie-search">
      <form class="search-form">
        <input
          class="search-form__input"
          type="text"
          name="query"
          placeholder="what film are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button class="search-form__button">Find</button>
      </form>
    </div>
  );
}

export default MovieSearch;
