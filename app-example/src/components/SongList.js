import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  const renderedList = props.songs
    ? props.songs.map((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button
                className="ui button primary"
                onClick={() => props.selectSong(song)}
              >
                Select
              </button>
            </div>
            <i className="large middle aligned icon"></i>
            <div className="content">
              <a className="header">{song.title}</a>
              <div className="description">{song.duration}</div>
            </div>
          </div>
        );
      })
    : null;

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);

// const mapDispatchToProps = (dispatch, song) => {
//   return {
//     selectSong: (song) => dispatch(selectSong(song))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SongList);
