import './styles.css';
import codingplaceholder from './media/codingplaceholder.png';
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {importAll} from './functions.js'
function ContentList(props){

  const dataState = props.data
  let [picState, picSet] = useState("codingplaceholder.png")
  const images = importAll(require.context('./media', false, /\.(png|jpe?g|svg)$/));

  return(

<div className="contentContainer">
  <div className="imageContainer">
    <img src={images[picState].default}></img>
  </div>
  <div className="listContainer">
    <ul
    onMouseLeave={() => picSet("codingplaceholder.png")}>
        {dataState.map(val => {
        return <li
          onMouseEnter={() => picSet(val.previewpic)}
          key={val.id}>
          <Link to={`/project/${val.id}`}>
          {val.name}
          </Link>
          </li>
        })}
    </ul>
  </div>
</div>

  )
}

export default ContentList
