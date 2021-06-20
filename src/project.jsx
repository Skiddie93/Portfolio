import './styles.css';
import React,{useState, useEffect} from 'react'
import {importAll} from './functions.js'


function Project(props){

  const images = importAll(require.context('./media', false, /\.(png|jpe?g|svg)$/));
  const params = props.match.params.id
  useEffect(()=>{
    switch(params) {
  case "1":
    descSet(homepage())
    break;
  case "2":
    descSet(webfictional())
    break;
  default:
    descSet("not found")
}
  },[])




let [descState, descSet] = useState("asdasd")


  return(

    <div className="projectDescription">
      {descState}
    </div>
  )
}

//______________________________________________________________________________________________________________


function homepage(){
  return(
    <div>
    <h1>Homepage Project</h1>

      </div>
  )
}

function webfictional(){
  return(
    <p>hihi</p>
  )
}

export default Project
