import { Component } from "react";
import { MdFavorite } from "react-icons/md";
import "./MovieItem.css";

class FavorMovieButton extends Component {
  state = {
    favor: false,
  };

     handleClick = () =>  this.setState({favor: !this.state.favor})
  render() {
    let { favor } = this.state;
    return (
      <div className={(favor = true ? "movie-like " : "movie-like favor")}>
        <MdFavorite onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default FavorMovieButton;
