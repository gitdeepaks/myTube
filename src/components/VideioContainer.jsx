import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";

const VideioContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const response = await data.json();
    console.log(response.items);
    setVideos(response.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div>
      <VideoCard info={videos[0]} />
    </div>
  );
};

export default VideioContainer;
