import './styles.css';
import React,{useState, useEffect} from 'react'
import ProjectDescription from './projectDes.jsx'


function Project(props){
  useEffect(()=>{
    getData()



  },[])

  let [itemState, itemSet] = useState([])


async function getData(){
  let data = await fetch('/projectData.json')
  let response = await data.json()
  itemSet(response)
}
  const id = props.match.params.id

  return(
    <div>
    {itemState.map(val => {
      if(val.id == id){
      return <h1 key={val.id}>{val.name}</h1> 
    }
    })}
    <ProjectDescription id={id} />
  </div>

)
 }
export default Project;
