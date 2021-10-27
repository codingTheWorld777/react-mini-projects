import React from "react";
import { connect } from "react-redux";

const SongDetail = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.selectedSong.title}</div>
        <div className="meta">
          <span>{props.selectedSong.duration}</span>
          <a></a>
        </div>
        <p></p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  if (!state.selectedSong) return { selectedSong: state.songs[0] };

  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
