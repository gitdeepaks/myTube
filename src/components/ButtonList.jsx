import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Song",
  "Live",
  "Cricket",
  "Football",
  "News",
  "Movies",
  "History",
  "Learn",
  "Trending",
  "Music",
  "Sports",
  "Gaming",
  "Movies",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
