import React, { useEffect } from "react";
import { YoutubeApi } from "../utils/constants/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YoutubeApi);
    const res = await data.json();
    console.log(res);
  };

  return <div>VideoContainer</div>;
};

export default VideoContainer;
