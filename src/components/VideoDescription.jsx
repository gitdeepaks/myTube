import React, { useState, useEffect } from "react";

const VideoDescription = ({ videoId }) => {
  const [videoDescription, setVideoDescription] = useState("");

  useEffect(() => {
    console.log("Video ID:", videoId); // Check if the video ID is correct
    if (videoId) {
      fetch(`https://www.googleapis.com/youtube/v3/videos/id=${videoId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          console.log("Description:", data); // Check the fetched data
          setVideoDescription(data);
        })
        .catch((error) => {
          console.error("Error fetching video description:", error);
        });
    }
  }, [videoId]);

  return (
    <div className="video-description">
      <p>{videoDescription}</p>
    </div>
  );
};

export default VideoDescription;
