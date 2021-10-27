import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteMovies, fetchCategories, filterMovies } from "../../actions";

const DeleteBtn = ({
  movie,
  movies,
  category,
  setCategory,
  moviesFiltered,
  filterMovies,
  deleteMovies,
  fetchCategories,
}) => {
  useEffect(() => {
    fetchCategories(movies);
    moviesFiltered.length
      ? (async () => {
          await filterMovies(category, movies);
        })()
      : console.log("Nothing here");
  }, [movies]);

  return (
    <div className="d-flex flex-row-reverse bd-highlight">
      <button
        type="button"
        className="btn btn-danger"
        value={category}
        style={{ marginBottom: "10px", marginRight: "10px" }}
        onClick={() => {
          const actions = async () => {
            await setCategory(category);
            await deleteMovies(movie);
            // await fetchCategories(movies);
          };

          actions();
        }}
      >
        Supprimer
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    categories: state.categories,
    moviesFiltered: state.moviesFiltered,
  };
};

export default connect(mapStateToProps, {
  deleteMovies,
  fetchCategories,
  filterMovies,
})(DeleteBtn);
