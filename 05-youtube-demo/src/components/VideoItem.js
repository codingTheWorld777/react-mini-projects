import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="item video-item"
      style={{ margin: "14px 0px" }}
      onClick={() => onVideoSelect(video)}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.channelTitle}
      />
      <div className="content">
        <b className="header" style={{ color: "#1e70bf" }}>
          {video.snippet.title}
        </b>
        <div className="description">
          <b>Publish at:</b> {video.snippet.publishedAt}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
