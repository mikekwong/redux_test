import { SONG_SELECTED } from "../constants/action-types";

export const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case SONG_SELECTED:
      return action.payload;
      break;

    default:
      return selectedSong;
      break;
  }
};
