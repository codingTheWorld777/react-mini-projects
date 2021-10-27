import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "Jalousie", duration: "4:05" },
    { title: "Tout oublier", duration: "3:05" },
    { title: "Blow up", duration: "4:40" },
    { title: "Don't start now", duration: "4:05" },
    { title: "Oui ou non", duration: "4:10" },
    { title: "J'entends", duration: "4:15" },
    { title: "Fever", duration: "4:00" },
    { title: "Love again", duration: "4:05" },
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload.song;
  }

  return selectedSong;
};

export default combineReducers({
    selectedSong: selectedSong,
    songs: songsReducer
});
