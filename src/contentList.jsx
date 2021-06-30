import './styles.css';
import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {importAll} from './functions.js'

function ContentList(props){

  const dataState = props.data
  let [bgState, bgSet] = useState("#AEB5BF")
  let [picState, picSet] = useState("codingplaceholder.png")
  const images = importAll(require.context('./media/previewPics', false, /\.(png|jpe?g|svg)$/));
  return(
<div style={{backgroundColor: bgState }} className="contentContainer">
  <div className="imageContainer">
    <img src={images[picState].default}></img>
  </div>
  <div className="listContainer">
    <ul
    onMouseLeave={() => {
      bgSet("#AEB5BF")
      picSet("codingplaceholder.png")
    }}>
        {dataState.map(val => {
        return <li
          onMouseEnter={() => {
            picSet(val.previewpic)
            bgSet(val.bgColor)
          }}
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
