import './styles.css';
import codingplaceholder from './media/codingplaceholder.png';
import React,{useState, useEffect} from 'react'
function ContentList(){

  useEffect(()=>{
    getData()
  },[])

  let [dataState, dataSet] = useState([])
    let [picState, picSet] = useState("codingplaceholder.png")

  async function getData(){
    let get = await fetch('./projectData.json')
    let response = await get.json()
    dataSet(response)
  }

  function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

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
        return  <li
          onMouseEnter={() => picSet(val.previewpic)}
          key={val.id}
          >{val.name}</li>
        })}
    </ul>
  </div>
</div>

  )
}

export default ContentList
