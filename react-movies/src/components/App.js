import React, { useState } from "react";
import MovieCard from "./MovieCard/MovieCard";
import Category from "./CategoryFilter/Category";
import Pagination from "./Pagination/Pagination";
import NumberOfCard from "./Pagination/NumberOfCard";
import { connect } from "react-redux";

const App = ({ movies, cardsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = movies.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Movies Test</h1>

      <div className="pagination">
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          numberOfPage={movies.length}
        />
      </div>

      <div className="category">
        <Category />
        <NumberOfCard />
      </div>

      <div className="MovieCard">
        <MovieCard movies={currentCards} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    cardsPerPage: state.cardsPerPage,
  };
};

export default connect(mapStateToProps)(App);
