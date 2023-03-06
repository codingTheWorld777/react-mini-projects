import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import Category from "./CategoryFilter/Category";
import Pagination from "./Pagination/Pagination";
import NumberOfCard from "./Pagination/NumberOfCard";

import { movies$ } from "../db/movies";
import { fetchMovies, filterMovies } from "../actions";

const App = ({ movies, moviesFiltered, cardsPerPage, fetchMovies }) => {
  const [category, setCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch movies card
  useEffect(() => {
    fetchMovies(movies$);
  }, []);

  // Get current cards based on cardsPerPage and category
  movies = moviesFiltered.length ? moviesFiltered : movies

  const indexOfFirstCard = (currentPage - 1) * cardsPerPage;
  const indexOfLastCard = (currentPage - 1) * cardsPerPage + cardsPerPage;
  const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Movies Test</h1>

      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          numberOfPage={movies.length}
        />
      </div>

      <div className="category" style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Category 
          category={category} 
          setCategory={setCategory} 
        />
        <NumberOfCard />
      </div>

      <div className="MovieCard">
        <MovieCard 
          currentPage={currentPage} 
          movies={currentCards} 
          setCategory={setCategory} 
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    cardsPerPage: state.cardsPerPage,
    moviesFiltered: state.moviesFiltered,
  };
};

export default connect(mapStateToProps, { fetchMovies, filterMovies })(App);
