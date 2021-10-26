import { movies$ } from "../db/movies";
import { categories$ } from "../db/categories";

export const fetchMovies = () => async (dispatch) => {
  const movies = await movies$;
  dispatch({ type: "FETCH_MOVIES", payload: movies });
};

export const deleteMovies = (movie) => async (dispatch) => {
  dispatch({
    type: "DELETE_MOVIE",
    payload: movie,
  });
};

export const filterMovies = (category, movies) => async (dispatch) => {
  dispatch({
    type: "FILTER_MOVIES",
    payload: {
      category: category,
      listOfMovies: movies,
    },
  });
};

export const fetchCategories = (movies) => async (dispatch) => {
  const categories = await categories$(movies);
  dispatch({ type: "FETCH_CATEGORIES", payload: categories });
};

export const numberOfCard = (number) => async (dispatch) => {
  dispatch({ type: "NUMBER_CARD", payload: number });
};
