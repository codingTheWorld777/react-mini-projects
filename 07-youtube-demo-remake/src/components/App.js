import React, { useEffect, useState } from "react";
import useVideos from "../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  // Use of custom hooks in App component to get 2 outputs (videos, search) from defaultSearchTerm
  const [videos, search] = useVideos("React tutorial");
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Select automatically the first video in the list of videos
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <SearchBar onFormSubmit={search} />
      <h3>Found: {videos.length} video(s).</h3>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>

          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
