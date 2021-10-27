import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid" style={{ paddingTop: "40px" }}>
        <div className="eight wide column">
          <SongList />
        </div>

        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
