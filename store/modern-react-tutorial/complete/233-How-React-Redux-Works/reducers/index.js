// !VA 237 Required import for combineReducers
import { combineReducers } from 'redux';

// !VA 236 Returns a static list of songs. This is a static data set so there's really no use in using a reducer for it, but we're doing it here for demo purposes.
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

// !VA 236 Reducer to handle the selected song. Initialized to null because nothing is selected when the page loads. The second parameter is the action defined in the Action Creator. 
const selectedSongReducer = (selectedSong = null, action) => {
  // !VA 236 if the action type is SONG_SELECTED, then return the payload defined in the action, otherwise return whatever the currently selected song is.
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  } 
  return selectedSong;
}

// !VA 237 combineReducers takes two keys: the property returned by the songsReducer and the property returned by the selectedSongReducer. NOTE: These property names are arbitrary. 
// !VA 237 Exporting the combinedReducers gives all other components in the project access to them.
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});