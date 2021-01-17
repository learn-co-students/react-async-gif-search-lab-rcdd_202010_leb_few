import React from 'react'
import { useState } from "react";
import NavBar from './NavBar'
import GifSearch from "./GifSearch.js";
import GifListContainer from './../containers/GifListContainer' ;


const App = () => {
const [query, setQuery] = useState("");

  const handleQuery = (q) => {
    setQuery(q);
    //console.log(query);
  };

  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
      <GifSearch handleQuery={handleQuery} />
      <GifListContainer giphyName={query} />
    </div>
  )
}

export default App
