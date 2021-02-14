import React from 'react';
import SearchBar from './SearchBar.js';
// !VA import the youtube api call
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  // !VA Now set the list of videos as state. Create a property and init it as empty array
  // !VA 130 Add property for the selected video to be displayed from VideoDetail
  state = {videos: [], selectedVideo: null };
  
  // !VA 135 Now we set the default video to play when the page loads. Call the function that initiates all the search logic and pass in a default search term, i.e. buildings
  componentDidMount() {
    this.onTermSubmit('buildings')
  }

  // !VA This is where the search callback is added that is called whenever the form is submitted. Term is the search term. The youtube call is documented in 119.
  // !VA 124 Async/await.   
  onTermSubmit  = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    }); 
    // !VA Works
    // console.log(response);
    // !VA set state to response.data.items
    // !VA 135 To get rid of th loading message if the video displays immediately, preset the selectedVideo property of state to the first item in the array.
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }

  // !VA 130 Callback for the selected video detail. This has to be set on the state so that the component rerenders.
  // !VA 131 Here we update our state on the app class
  onVideoSelect = (video) => {
    // console.log('From the app :>> ' + video);
     this.setState({ selectedVideo: video });
  
  }


  render() {  
    // !VA Below, the callback above is added as a prop. Remember, whenever we create a user i.e. custom prop or callback name, we can use any name.  
    // !VA 125 This is where the video list is displayed. To do that, we need a prop called videos which calls the videos in state, which were put there in onTermSubmit. This prop 'videos' is pushed down into the VideoList component. In other words, the videos in the App component's state are passed down to the child component VideoList's props so they can be displayed in the App component. I had it there for a minute... 
    // !VA 130 onVideoSelect calls the callback that sets the video array to state
    // !VA 131 The video prop in VideoDetail passes the selected video from state down to the VideoDetail component, which is then rerendered here. 
    // !VA 134 Style the video panes side-by-side
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={ this.onVideoSelect }videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
