import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  // Communicating "Child" and "Parent"
  async onSearchSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui" style={{ marginTop: "20px" }}>
        <h1>Pick pictures app by its type</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
