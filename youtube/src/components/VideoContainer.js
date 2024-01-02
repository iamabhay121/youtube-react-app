import React, { useEffect, useState } from "react";
import { YoutubeApi } from "../utils/constants/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YoutubeApi);
    const res = await data.json();
    console.log(res.items);
    setvideos(res.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
