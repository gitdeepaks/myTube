import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v"); // Get the video ID from URL search params

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]); // Make sure to pass dependencies to useEffect to avoid unnecessary re-renders

  return (
    <div className="watch-page-container">
      <div className="video-player">
        <iframe
          width="1100"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {/* Render the VideoDescription component below the iframe */}
    </div>
  );
};

export default WatchPage;
