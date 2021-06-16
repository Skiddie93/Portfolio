import './styles.css';
import codingplaceholder from './media/codingplaceholder.png';
import React,{useState, useEffect} from 'react'
function ContentList(){

  useEffect(()=>{
    getData()
  },[])

  let [dataState, dataSet] = useState([])

  async function getData(){
    let get = await fetch('./projectData.json')
    let response = await get.json()
    dataSet(response)
  }

  return(

<div className="contentContainer">
  <div className="imageContainer">
    <img src={codingplaceholder}></img>
  </div>
  <div className="listContainer">
    <ul>
        {dataState.map(val => <li key={val.id}>{val.name}</li>)}
    </ul>
  </div>
</div>

  )
}

export default ContentList
