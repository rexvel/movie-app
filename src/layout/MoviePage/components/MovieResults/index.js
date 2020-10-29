import { Component } from "react";
import dataSource from "../../../../data";
import FavorMovieButton from '../FavorMovieButton';
import "../FavorMovieButton/MovieItem.css";
import "./MovieResults.css";

export default class MovieResults extends Component {
  state = {
    items: dataSource,
  };
  callbackFunction = (key) => {
    if (key === 0) return;
    const { items } = this.state;
    const index = key - 1;
    const updatedItems = [
      items[index + 1],
      ...this.state.items.slice(0, index + 1),
      ...this.state.items.slice(index + 2),
    ];
    this.setState({ items: updatedItems, isFavor:true });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="movie-items">
        {items.map((movie, key) => {
          const { title, description, posterurl } = movie;

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
                <div
                  className="movie-like"
                  onClick={() => this.callbackFunction(key)}
                >
                <FavorMovieButton />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
