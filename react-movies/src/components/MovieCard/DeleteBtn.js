import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteMovies, fetchCategories } from "../../actions";

const DeleteBtn = ({ movie, movies, deleteMovies, fetchCategories }) => {
  useEffect(() => {
    fetchCategories(movies);
  }, [movies]);

  return (
    <div className="d-flex flex-row-reverse bd-highlight">
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginBottom: "10px", marginRight: "10px" }}
        onClick={() => {
          const actions = async () => {
            await deleteMovies(movie);
            await fetchCategories(movies);
          };

          actions();
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { deleteMovies, fetchCategories })(
  DeleteBtn
);
