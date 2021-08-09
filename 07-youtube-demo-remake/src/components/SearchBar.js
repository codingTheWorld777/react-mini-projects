import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label htmlFor="search-input">Youtube video search</label>
          <input
            type="text"
            id="search-input"
            onChange={onInputChange}
            value={term}
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
