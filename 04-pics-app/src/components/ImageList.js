import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  let images = props.images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return (
    <div>
      <div style={{ margin: "10px 0px" }}>Found: {props.images.length} images </div>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
