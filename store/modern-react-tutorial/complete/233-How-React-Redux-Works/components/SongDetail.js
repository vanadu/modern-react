import React from 'react';
import { connect } from 'react-redux';

// !VA 242 This is a functional component
// !VA 245 Get the props which is provided below by mapStateToProps
// const SongDetail = props => {
  // !VA 245 And destructure out only the prop we need for the SongDetail component
const SongDetail = ({ song }) => {
  // !VA When the component is initially rendered, there is no selected song yet so song returns null. So trap that and show a message to select a song and return out to prevent the error that would appear if the song prop returns null.
  if (!song) {
    return <div>Select a song!</div>
  }



  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

// !VA 244 Wrap the SongDetail in a connect function. Call mapStateToProps wiht the entire state  object, and then only return the state property we are processing, i.e. the selectedSong property. Assign that to a prop 'song' so it can be accessed inside the component. The song property name is arbitrary!
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

// !VA 244 Already familiar with this structure...
export default connect(mapStateToProps)(SongDetail);
