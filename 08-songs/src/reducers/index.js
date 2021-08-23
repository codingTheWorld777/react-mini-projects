// Reducers
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Love again", duration: "4:00" },
    { title: "Don't start now", duration: "3:05" },
    { title: "Fever", duration: "4:05" },
    { title: "Blow up!", duration: "3:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
