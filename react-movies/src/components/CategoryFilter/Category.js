import React from "react";
import { connect } from "react-redux";
import { fetchCategories, filterMovies } from "../../actions";

const Category = ({ movies, categories, fetchCategories, filterMovies }) => {
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
          onChange={(e) => {
            filterMovies(e.target.value);
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

export default connect(mapStateToProps, { fetchCategories, filterMovies })(
  Category
);
