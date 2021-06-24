import './styles.css';
import React,{useState, useEffect} from 'react'
import {importAll} from './functions.js'


function Project(props){

  const images = importAll(require.context('./media/previewPics', false, /\.(png|jpe?g|svg)$/));
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
      {props.data.map(val =>{
        if(val.id == params){
          return(
              <React.Fragment>
            <h1 key={val.id}>{val.name}</h1>
            <img src={images[val.previewpic].default}></img>
            </React.Fragment>
          )
        }
      })}
      {descState}
    </div>
  )
}

//______________________________________________________________________________________________________________


function homepage(){
  return(
    <div className="description">
    <p>
      A homepage is a jumping-off point for web browsing. It utilises a menu-like design that allows quick acces to websites of your
      choice and compartmentalization.
    <img src={require('./media/homepage/menubar.png').default}></img>
     Along with a clock with a date this project also includes a search field which allows for basic searching functionality
    and a note taking application which retains info via local storage.
    <br></br>
    <br></br>
    The search bar works with a simple form which gets the value from the input field and posts it into google.com/search
    and redirects the user to the appropriate google search
    <br></br>
    <br></br>
      <img src={require('./media/homepage/searchbar.png').default}></img>
      <code>{`
<form autocomplete="off" class="src" action="http://www.google.com/search" method="get">
    `}</code>
    <br></br>
    <br></br>
     The note taking part of the project is the most complex part of the project. It required rendering user generated content
     along with information stored inside local storage. inner.HTML would not work here since local storage stores only the values
     and not the nodes itself, so they have to be created separately.
     <br></br>
     <br></br>
     <code>{`
let txtVal = document.getElementById('ips').value;
let listNode = document.getElementById('listNode');
let liNode = document.createElement("LI");
let txtNode = document.createTextNode(txtVal);
   `}</code>
   <br></br>
   <br></br>
   Reading from local storage is the same concept as rendering content from user input but with looping through all stored
   values and generating nodes and a delete button for each one.
   <img src={require('./media/homepage/notes.png').default}></img>
    </p>
      </div>
  )
}

function webfictional(){
  return(
    <p>hihi</p>
  )
}

export default Project
