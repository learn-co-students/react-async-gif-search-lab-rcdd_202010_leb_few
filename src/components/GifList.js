import React, {Component} from "react";

export default class GifList extends Component{
  render(){
    return(
      <ul>
    {props.gifs.map(gif => 
    <li>
    <div>
    <img src={gif.url} alt="gif"/>
    </div>
    </li>)}
    </ul>
    )
  }
  
}

