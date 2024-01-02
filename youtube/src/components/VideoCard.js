import React from "react";

const VideoCard = ({ info }) => {
  // Check if info exists and has the expected structure
  if (!info || !info.snippet || !info.statistics || !info.snippet.thumbnails) {
    return <div>No video information available</div>;
  }

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
