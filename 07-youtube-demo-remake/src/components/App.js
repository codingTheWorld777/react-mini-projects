import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Run once time in the initial render
  useEffect(() => {
    onTermSubmit("React Tutorial");
  }, []);

  /** To handle form submit from SearchBar component
   * -> Pass props from SearchBar(child) to App(parent)
   */
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  /** To handle the 'click' event onto VideoItem (or VideoList) component and send video
   * data to VideoDetail via App component
   */
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    // console.log("From the App component", selectedVideo);
  };

  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />
      <h3>Found: {videos.length} video(s).</h3>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
