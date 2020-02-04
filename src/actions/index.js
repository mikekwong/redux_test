import { SONG_SELECTED } from "../constants/action-types";

export const selectSong = song => ({
  type: SONG_SELECTED,
  payload: song
});
