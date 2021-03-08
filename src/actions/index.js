// Action creator
// A named export instead of default in case we have
// multiple action creators in the file
export const selectSong = (song) => {
  // Return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
