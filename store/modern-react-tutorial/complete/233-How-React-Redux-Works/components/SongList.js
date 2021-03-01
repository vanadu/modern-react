import React, { Component } from 'react';
import { connect } from 'react-redux';
// !VA DOn't forget that index.js is implicit 
import { selectSong } from '../actions';


class SongList extends Component {

  // !VA 238 Don't forget that this is how you define a method inside a component! No function keyword, no arrow function...
  renderList() {
    // !VA Map over the songs in the song list to render out JSX. Note that there are two return keywords. The inner statement returns some amount of JSX for the mapping function. The return function for the map statement produces a new array of JSX elements, which we will return from the renderList menthod.
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title} >
          <div className="right floated content">
            <button 
              className="ui button primary"
              // !VA 242 This onClick prop calls the selectSong action in the connect function to update state with the selected song.
              // !VA 243 This whole process is initiated here, this is where the action creator cycle is initiated. Without an action creator, Redux cannot identify or detect any function or event or anything. REDUX REQUIRES AN ACTION CREATOR! 
              onClick={ () => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    }); 
  }

  render() { 
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

// !VA 238 mapStateToProps is named this by convention. What it does is take the state, run some process on it, and make the properties of state available to the component as props. This and the connect function below are ALWAYS present in React/Redux.
const mapStateToProps = state => {
  console.log('state :>> ');
  console.log(state);
  return { songs: state.songs };
}

// !VA 238 This adds the connection function which contains the SongList function. So the connect function RETURNS the selectSong function which is invoked by the second set of parentheses. So this is basically a nested function.  This and the mapStateToProps function below are ALWAYS present in React/Redux.
// !VA 242 To run the action creator, include it as the second argument to the connect function. And since the key and value are identical, we can with ES6 reduce it down to just the property name, the property value is implicit. The connect function then passes the action creator to the component as props. This actually a dispatch function that is handled by the Provider. The Provider does the work of dispatching behind the scenes.
// export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
export default connect(mapStateToProps, { selectSong })(SongList);