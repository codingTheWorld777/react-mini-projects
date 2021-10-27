import React from "react";
import { connect } from "react-redux";
import { fetchCategories, filterMovies } from "../../actions";

const Category = ({
  movies,
  category,
  setCategory,
  categories,
  filterMovies,
}) => {
  const renderCategories = () => {
    const renderedCategories = categories.map((category, id) => {
      return (
        <option value={category} key={id}>
          {category}
        </option>
      );
    });

    return renderedCategories;
  };

  return (
    <div>
      <h3>Catégorie</h3>

      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={categories.includes(category) ? category : categories[0]}
          onChange={(e) => {
            setCategory(e.target.value);
            const actions = async () => {
              await filterMovies(e.target.value, movies);
            };

            actions();
          }}
        >
          {categories ? renderCategories() : null}
        </select>
      </div>
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
  fetchCategories,
  filterMovies,
})(Category);
