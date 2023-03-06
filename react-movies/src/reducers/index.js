import { combineReducers } from "redux";

const moviesReducer = (movies = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    case "DELETE_MOVIE":
      return movies.filter((movie) => movie.id !== action.payload.id);
    default:
      return movies;
  }
};

const moviesFilteredReducer = (movies = [], action) => {
  switch (action.type) {
    case "FILTER_MOVIES":
      if (action.payload.category === "All") {
        console.log(action.payload.listOfMovies.length)
        return [...action.payload.listOfMovies]
      }

      return action.payload.listOfMovies.filter(
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
      return parseInt(action.payload);
    default:
      return parseInt(numberOfCard);
  }
};

export default combineReducers({
  movies: moviesReducer,
  categories: categoriesReducer,
  moviesFiltered: moviesFilteredReducer,
  cardsPerPage: cardsPerPageReducer,
});
