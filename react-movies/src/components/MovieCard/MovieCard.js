import React from "react";
import { connect } from "react-redux";

import DeleteBtn from "./DeleteBtn";

import { fetchMovies } from "../../actions";

const MovieCard = ({ movies, setCategory }) => {
  const renderMovies = (movies) => {
    const renderedMovies = movies.map((movie, id) => {
      return (
        <div className="col-12 col-sm-6 col-lg-3 mb-4" key={id}>
          <div className="card" style={{ width: "18rem" }} key={movie.id}>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {movie.category}
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Like: {movie.likes}
              </a>
              <a href="#" className="card-link">
                Dislike: {movie.dislikes}
              </a>
            </div>

            <DeleteBtn 
              movie={movie} 
              category={movie.category} 
              setCategory={setCategory} 
            />
          </div>
        </div>
      );
    });

    return renderedMovies;
  };

  return (
    <div className="row">
      {renderMovies(movies)}
    </div>
  );
};

export default connect(null, { fetchMovies })(MovieCard);
