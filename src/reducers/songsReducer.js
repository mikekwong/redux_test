const initialState = {
  songs: [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:45" },
    { title: "All STar", duration: "3:45" }
  ]
};

export const songsReducer = (state = initialState, action) => {
  switch (action.payload) {
    default:
      return state.songs;
      break;
  }
};
