import { combineReducers } from "redux";

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    case "DELETE_MOVIE":
      return movies.filter((movie) => movie.id !== action.payload.id);
    case "FILTER_MOVIES":
      return movies.filter(
        (movie) => movie.category === action.payload.category
      );
    default:
      return movies;
  }
};

const categoriesReducer = (categories = [], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return action.payload;
    default:
      return categories;
  }
};

const cardsPerPageReducer = (numberOfCard = 12, action) => {
  switch (action.type) {
    case "NUMBER_CARD":
      return action.payload;
    default:
      return numberOfCard;
  }
};

export default combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer,
  cardsPerPage: cardsPerPageReducer,
});
