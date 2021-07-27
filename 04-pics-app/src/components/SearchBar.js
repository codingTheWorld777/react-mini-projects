import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Take the input and find infos based on this input
    this.props.onSubmit(this.state.text);
  }

  onInputChange(event) {
    // let text = document.getElementById("prompt").value;
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="ui container content">
        <div className="ui category search">
          <form
            onSubmit={this.onFormSubmit}
            className="ui form icon input"
            method="get"
          >
            <input
              className="prompt"
              type="text"
              name="input"
              value={this.state.text}
              onChange={this.onInputChange}
              placeholder="Search pictures..."
            />
            <button type="submit">
              <i className="search icon"></i>
            </button>
          </form>
        </div>

        <div className="ui segment card">
          <div className="results" id="results">
            {this.state.text}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
