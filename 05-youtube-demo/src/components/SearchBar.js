import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    // Callback from Parent component (In this case App component)
    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-input">Youtube video search</label>
            <input
              type="text"
              id="search-input"
              onChange={this.onInputChange}
              value={this.state.term}
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
