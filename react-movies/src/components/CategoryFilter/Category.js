import React from "react";
import { connect } from "react-redux";

import { fetchCategories, filterMovies } from "../../actions";

const Category = ({
  category,
  setCategory,
  filterMovies,
  movies,
  categories,
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
    <div className="mt-3 mb-5">
      <h3>Catégorie</h3>

      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          value={categories.includes(category) ? category : categories[0]}
          onChange={(e) => {
            setCategory(e.target.value);
            const filterMovies_ = async () => {
              await filterMovies(e.target.value, movies);
            };

            filterMovies_();
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
  };
};

export default connect(mapStateToProps, {
  fetchCategories,
  filterMovies,
})(Category);
