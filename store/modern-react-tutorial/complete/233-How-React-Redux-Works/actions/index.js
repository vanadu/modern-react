// Action creator
// !VA 235 This is a named export. selectSong is the name of the action creator. WHENEVER WE WANT TO UPDATE THE STATE OF THE REDUX STORE, WE HAVE TO CALL AN ACTION CREATOR!
// !VA Single arguments don't require the parentheses
// export const selectSong = (song) => {
// !VA 235 the argument is passed in and is equal to the payload.
export const selectSong = song => {
  // // !VA This is the action returned. Actions must have a type property. Payload is optional. type is by conv ention written in all caps with underscore separators! The payload is  
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
