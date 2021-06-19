import './styles.css';
import React,{useState, useEffect} from 'react'



function ProjectDescription(props){

  useEffect(()=>{
    if(props.id==1){
        desSet(homepage())
    } else if(props.id==2){
      desSet(webfictional())
    }
  },[])

let [desState, desSet] = useState("")


  return(

    <div>
      {desState}
    </div>
  )
}



export default ProjectDescription

function homepage(){
  return(
    <p>yoyo</p>
  )
}

function webfictional(){
  return(
    <p>hihi</p>
  )
}
