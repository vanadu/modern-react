import React from 'react';
import VideoItem from './VideoItem';

// !VA 126 IMPORTANT This shows how to destructure props received from a parent component out so you only have to reference the props' child properties in the component JSX. Note the curlies inside the parentheses. This is a strange construction that I don't recognize as being ES6 destructuring.
// !VA Added the onVideoSelect prop (destructured)
const VideoList = ({ videos, onVideoSelect }) => {
  // !VA 125 Just to test this out, we write props.videos.length out to the JSX to see if the video count renders. It did.
  // !VA 126 Now we map over the videos array and for each video, we 
  // !VA 127 Now to get thumbnails, add a prop to the VideoItem component that passes down the video array. This will be passed to the props object in the VideoItem component.
  // !VA 130 Added callback to onVideoSelect
  const renderedList = videos.map((video) => {
    // !VA 134 Add the videoId as key to get rid of the error warning.
    return <VideoItem key={ video.id.videoId } onVideoSelect={ onVideoSelect } video={ video }/>
  });

  return (
    <div className="ui relaxed divided list">
      { renderedList }
    </div>
  );
};

export default VideoList;