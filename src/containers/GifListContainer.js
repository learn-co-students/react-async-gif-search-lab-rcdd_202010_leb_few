import * as React from "react";
import GifList from "../components/GifList.js";
import { useState, useEffect } from "react";

const GifListContainer = (props) => {
  const [listGiphy, setListGiphy] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${props.giphyName}&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then((response) => response.json())
      .then((giphy) => {
        setListGiphy(giphy.data);
      });
  }, [props.giphyName]);

  return (
    <div>
      {listGiphy.length !== 0
        ? listGiphy.map((g) => <GifList imagePath={g.images.original.url} />)
        : ""}
    </div>
  );
};
export default GifListContainer;
