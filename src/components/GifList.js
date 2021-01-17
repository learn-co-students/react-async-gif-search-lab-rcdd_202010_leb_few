import * as React from "react";

const GifList = (props) => {
  return (
    <div>
      <img src={props.imagePath} />
    </div>
  );
};
export default GifList;