import React from "react";
import { extension } from "../../../utils/functions";
import "./index.scss";

const images = [
  { name: '1', extension: 'png', preview: "https://media.istockphoto.com/id/544676786/fr/photo/mosqu%C3%A9e-de-casablanca.jpg?s=1024x1024&w=is&k=20&c=g7kdEVV-ce5H6j7r5oLpzHNzqML9sRG9iJt0jQWmiYc=" },
  { name: '2', extension: 'jpg', preview: "https://media.istockphoto.com/id/544676786/fr/photo/mosqu%C3%A9e-de-casablanca.jpg?s=1024x1024&w=is&k=20&c=g7kdEVV-ce5H6j7r5oLpzHNzqML9sRG9iJt0jQWmiYc=" },
  { name: '3', extension: 'png', preview: "https://media.istockphoto.com/id/544676786/fr/photo/mosqu%C3%A9e-de-casablanca.jpg?s=1024x1024&w=is&k=20&c=g7kdEVV-ce5H6j7r5oLpzHNzqML9sRG9iJt0jQWmiYc=" },
  { name: '4', extension: 'jpg', preview: "https://media.istockphoto.com/id/544676786/fr/photo/mosqu%C3%A9e-de-casablanca.jpg?s=1024x1024&w=is&k=20&c=g7kdEVV-ce5H6j7r5oLpzHNzqML9sRG9iJt0jQWmiYc=" },
]



const DropZoneApp = () => {
  return (
    <div className="drop-zone-wrapper">
      <div className="uploaded-images" >
        {images.map((file, idx) => (
          <div key={idx} title={file.name}>
            {["jpeg", "png", "jpg", "gif", "svg", "bmp"].includes(file.extension) ? (<img className="image-item" src={file.preview} />) : (extension(file.name, true))}
            {/* <Button color="danger" size="sm" >x </Button> */}
          </div>
        ))}
      </div>

    </div>
  );
};

export default DropZoneApp;
