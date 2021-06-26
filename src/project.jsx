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
      <h2>Overview</h2>
      A homepage is a jumping-off point for web browsing. It utilises a menu-like design that allows quick acces to websites of your
      choice and compartmentalization.

     Along with a clock with a date this project also includes a search field which allows for basic searching functionality
    and a note taking application which retains info via local storage.
    <br></br>
    <br></br>
    <h2>Search bar</h2>
    The search bar works with a simple form which gets the value from the input field and posts it into google.com/search
    and redirects the user to the appropriate google search
    <br></br>
    <br></br>
      <img src={require('./media/homepage/searchbar.png').default}></img>
      <code>{`
<form autocomplete="off" class="src" action="http://www.google.com/search" method="get">
    `}</code>

      <h2>Notes input</h2>
     The note taking part of the project is the most complex part of the project. It required rendering user generated content
     along with information stored inside local storage. inner.HTML would not work here since local storage stores only the values
     and not the nodes itself, so they have to be created separately. Since this was my first coding project i went with this solution, but
     if i was to do it again i would just store HTML syntax and pass it inside html directly istead of generating new nodes every time.

     <code>{`
let txtVal = document.getElementById('ips').value;
let listNode = document.getElementById('listNode');
let liNode = document.createElement("LI");
let txtNode = document.createTextNode(txtVal);
   `}</code>

   Reading from local storage is the same concept as rendering content from user input but with looping through all stored
   values and generating nodes and a delete button for each one.
   <img src={require('./media/homepage/notes.png').default}></img>
     <h2>Menu bar</h2>
     The menu bar is the mose essential part of this project. Here is where the users customisation really comes into play.
     You can change the number of menus and their respective SVG icons with some simple HTML editing. The same goes for the dropdown menu links.
     <img src={require('./media/homepage/menubar.png').default}></img>
     The trickiest part of the menu bar was handling the right-to-left background color change, which was achieved by a 50%-50% gradient with a width of 200%,
     which on hover moves so that the half of the gradient which has width of 100% takes the whole of the visible divs space while the other part gets moved outside the div
     with an overflow hidden property.


     <code>{`
 .dropdown:hover .dropbtn {background: linear-gradient(to right, #1C272C 50%, #ffff 50%);
   `}</code>
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
