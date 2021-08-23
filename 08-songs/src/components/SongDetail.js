import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
  if (mySelectedSong) {
    return (
      <div>
        <h2>{mySelectedSong.title}</h2>
        <div>
          <b>Durarion: </b> {mySelectedSong.duration}
        </div>
      </div>
    );
  }

  return null;
};

const mapPropsToState = (state) => {
  if (!state.selectedSong) {
    return { mySelectedSong: state.songs[0] };
  }

  return { mySelectedSong: state.selectedSong };
};

export default connect(mapPropsToState)(SongDetail);
