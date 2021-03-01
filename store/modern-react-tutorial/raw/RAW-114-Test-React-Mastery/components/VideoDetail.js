import React from 'react';

// !VA 131 Again, props contains the video object, so we can destructure that out. Then we get the video title
const VideoDetail = ({ video }) => {
  // !VA 131 If no video is returned, then the value of video will be as it was initialized, i.e. null. So we add a condition to trap that.
  if (!video) {
    return <div>Loading...</div>
  }
  // !VA Get the video id to display in the iframe
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc}></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;