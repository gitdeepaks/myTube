import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/contants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideioContainer = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const response = await data.json();
    setVideos(response.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideioContainer;
