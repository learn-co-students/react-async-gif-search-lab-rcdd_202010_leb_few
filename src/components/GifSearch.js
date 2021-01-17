import * as React from "react";
import { useState } from "react";

const GifSearch = (props) => {
  const [inputQuery, setinputQuery] = useState("");
  const handleChangeInput = (e) => {
    setinputQuery(e.target.value);
  };

  const handleSubmitGiphy = (e) => {
    e.preventDefault();
    props.handleQuery(inputQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmitGiphy}>
        <label for="inputText">Enter a Search Term</label>
        <br />
        <input type="text" name="inputText" onChange={handleChangeInput} />
        <br />
        <input type="submit" value="Find GIFS" />
      </form>
    </div>
  );
};
export default GifSearch;