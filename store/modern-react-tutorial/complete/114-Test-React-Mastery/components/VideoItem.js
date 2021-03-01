import './VideoItem.css';
import React from 'react';

// !VA 127 props now contains the video array with all its data about the individual videos. So we can now destructure out the video array from props.
const VideoItem = ({ video, onVideoSelect }) => {
  // !VA 130 Now add the event handler for the click to get the selected video's detail. This requires an arrow function in the onClick prop. Otherwise, onVideoSelect would run, but it wouldn't find the video. I don't get this.
  return (
    <div onClick={ () => onVideoSelect(video) }className="video-item item">
      <img className="ui image" alt={video.snippet.title }src={ video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;