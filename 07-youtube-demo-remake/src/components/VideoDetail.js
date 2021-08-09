import React from "react";

const VideoDetail = ({ video }) => {
  let videoSrc = "";
  let videoDescription = "";
  let videoTitle = "";

  if (video != null) {
    videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    videoDescription = <p><b>Description: </b> {video.snippet.description}</p>;
    videoTitle = video.snippet.title;
  }

  return (
    <div className="ui segment video-detail">
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>

      <div className="ui secondary segment video-description">
        <h3>{videoTitle}</h3>
        <div>{videoDescription}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
