import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount = () => {
    this.onTermSubmit("React tutorials");
  }

  /** To handle form submit from SearchBar component
   * -> Pass props from SearchBar(child) to App(parent)
   */
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  /** To handle the 'click' event onto VideoItem (or VideoList) component and send video
   * data to VideoDetail via App component
   */
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    // console.log("From the App component", this.state);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <h3>Found: {this.state.videos.length} video(s).</h3>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
