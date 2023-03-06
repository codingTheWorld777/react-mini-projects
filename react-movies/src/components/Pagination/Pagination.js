import React from "react";
import { connect } from "react-redux";

const Pagination = ({ movies, cardsPerPage, paginate, currentPage }) => {
  const pageItems = [];
  const pageLength = Math.ceil(movies.length / parseInt(cardsPerPage));

  for (let i = 0; i < pageLength; i++) {
    pageItems.push(
      <li className="page-item" key={i}>
        <a className="page-link" href="#" onClick={() => paginate(i + 1)}>
          {i + 1}
        </a>
      </li>
    );
  }

  return (
    <div className="mt-4">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => {
                if (currentPage > 1) paginate(currentPage - 1);
              }}
            >
              Previous
            </a>
          </li>

          {/* Page Number */}
          {pageItems}

          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => {
                if (currentPage < pageLength) paginate(currentPage + 1);
              }}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="lead">Current page: {currentPage}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    cardsPerPage: state.cardsPerPage,
  };
};

export default connect(mapStateToProps)(Pagination);
