import './styles.css';
import React,{useState, useEffect} from 'react'
import {importAll} from './functions.js'
import {LightenDarkenColor} from './functions.js'


function Project(props){

  const images = importAll(require.context('./media/previewPics', false, /\.(png|jpe?g|svg)$/));
  const params = props.match.params.id

  useEffect(()=>{
    switch(params) {
  case "1":
    descSet(homepage())
    break;
  case "5":
    descSet(flowerwatch())
    break;
  case "2":
    descSet(webfictional())
    break;
  case "3":
    descSet(ztwinprimes())
    break
  case "4":
    descSet(ecomercefictional())
    break;
  default:
    descSet(homepage())
}
  },[])



let [descState, descSet] = useState("asdasd")


  return(

    <React.Fragment>
      {props.data.map(val =>{
        if(val.id == params){
          return(
            <div  key={val.id+"bg"} style={{backgroundColor: LightenDarkenColor(val.bgColor,70) }} className="backgroundDescription">
            <div key={val.id+"desc"} style={{backgroundColor: val.bgColor }} className="projectDescription">
            <h1 key={val.id}>{val.name}</h1>
            <img key={val.id+"img"} src={images[val.previewpic].default}></img>
              {descState}
            </div>
            </div>
          )
        }

      }
    )}
  </React.Fragment>
  )
}

//______________________________________________________________________________________________________________


function homepage(){
  return(
    <div className="description">
    <article>
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
    </article>
      </div>
  )
}

function flowerwatch(){
  return(
    <div className="description">
    <article>
      <h2>Overview</h2>
      This is a python application which runs in the terminal and was written with the python curses library.
      The application was made for keeping track of plant watering cycle and allows you to add and remove items
      and reseting the counter on each item.
      <h2>How it works</h2>
      Python curses treats the terminal as a window and renders items individualy or in bulk inside an array based
      on a given calculation for example:
      <code>{`
y = h//2 + ind - len(allplants)//2
x = w//2 - len(ime)//2
    `}</code>
  Here we can see the calculation for centering an array of items where "h" and "w" stand for the viewports
  height and width "len(allplants)" for the length of an item and "ind" is the index of the current item
  being randered.
  <br></br>
  <br></br>
  You navigate by listening to key presses and keeping track of a specific row and column you are currently on
  and styling your current position differently than everything else.
  <img src={require('./media/flowerwatch/newplant.png').default}></img>
  How many days have passed since the last time you watered the plant gets calculated every time you render the window
  with a "function" set inside the plants class
  <code>{`
def diff (self):
     if self.watered == "Null":
         self.watered = date.today()

      tdy = date.today()
      self.days = tdy - self.watered
      return self.days
`}</code>
<h2>Features</h2>
The add feature lets you add a new plant to the list. the only thing you have to do is choose the "add" option and
name the plant. The plant will than be added to the list.
<img src={require('./media/flowerwatch/nameplant.png').default}></img>
After adding a plant you can choose it from the list and open two more options which are the "water" option,
and delete option. The water option will reset the days counter to 0 and the delete option will remove the plant
from the list
<img src={require('./media/flowerwatch/plantoptions.png').default}></img>

</article>
    </div>
  )
}

function webfictional(){
  return(
    <div className="description">
    <article>
      <h2>Overview</h2>
      This is a mock site for a bussines that doesn't exist. it consist of a landing page,
      info section about the bussines, summary of some projects, a page with all projects and a dedicated page for each project.
      It also has an "about us page" and a "contact" page.
      <h2>Sections</h2>
      The first section that we see is the landing section where the "contact us!" button makes an entrance width
      a letter by letter animation.
      <code>{`
function landingAnimation() {
    setTimeout(function() {
      if (i < 8) {
         document.getElementById("ani1").innerHTML+= res[i]
      }else if (i > 18) {
        document.getElementById("ani3").innerHTML+= res[i]
      }else {
        document.getElementById("ani2").innerHTML+= res[i]
      }
      i++;

      if (i <res.length) {
        landingAnimation();
      }
    }, 100)
    `}</code>
  A recursive functions calls itself with a delay of a tenth of a second and displays a new character
  on every call.
  <br></br>
  The landing page also has a 100vh scroll-down feature where a single scroll gets you exactly a full viewport height
  lower onto a new screen. This was achieved by checking the distance from the top of the document along with the scroll
  direction.
  <code>{`
function change(){
  let a =  document.scrollingElement.scrollTop;
  let h = window.innerHeight;
  scrollDir()

  if (updown==0) {
    if (a<h) {
    window.scrollTo(0,h)
  }else if (a>=h) {
    window.scrollTo(0,h*2)
    }
  }else if (updown==1) {
    if (a>h ) {
      window.scrollTo(0,h)
    }else if (a<=h) {
      window.scrollTo(0,0)
    }}}

`}</code>
<br></br>
<br></br>
On the Projects page we can see a carousel for every project. The carousel gives the illusion as if it is looping
around but the trick is that the first and the last image are the same. When you reach the end the line of pictures
gets reset back at the beggining.
<img src={require('./media/webfictional/carousel.png').default}></img>
Each carousel uses the same code since the event listeners are bound to an event from a specific div.
The event listeners are delt by a for-loop of an array of items with the class name nextbutton (or previousbutton).
<br></br>
<br></br>
A very similar principle was applyed to the overlay on the porject specific page. The main difference was targeting the exact picture
that was clicked. This is handled by simply checking if the clicked target was an image and than taking the outer html of the correct element
and applying it to inner html of the desired div. this would look somethink like this.
<code>{`
  gallery.addEventListener('click', function(e){

  if (e.target.nodeName == "IMG") {
      eventNode = e.target.parentNode
      displayItem.innerHTML = e.target.outerHTML
      overlay.classList.toggle("previewOverlay-active");
    }

`}</code>
The overlay would look something like this.
<img src={require('./media/webfictional/overlay.png').default}></img>
My favorite feature of this site is the about us dispay which consist of a text and a image section. Underneath, there are dots
which act as content switchers. each dot will show its own content in the image and text section. the comentent is seamlessly changed
when it slides outside its own div and pops out with the new content. The page looks like this.
<img src={require('./media/webfictional/about.png').default}></img>
There is really nothing special happening here. The content just gets rotet by a switch statement accourdin to the child id of the dots div.
The hardest part of the whole thing was handling the resize responsiveness since the whole orientation has to change without refreshing
the windows happens to change bellow a certain point
<code>{`

  function listenResize(){
    if (window.innerWidth<812 && state==true ) {
      state = false
      translateFirst= "translateY(110%)"
      translateSecond="translateY(-110%)"
      translateThird="translateY(0%)"
    }else if(window.innerWidth>812 && state==false ){

        state = true
        translateFirst= "translateX(110%)"
        translateSecond="translateX(-110%)"
        translateThird="translateX(0%)"
    }
  }

`}</code>
  There is also a function which sets the state to true or false accroding to windows width, so that the if statement only runs once when its
  changed.
    </article>
    </div>
  )}

function ztwinprimes(){
  return(
    <div className="description">
    <p>
      <h2>Overview</h2>
      </p>
    </div>
  )}

function ecomercefictional(){
  return(
    <div className="description">
    <p>
      <h2>Overview</h2>
      </p>
    </div>
  )}

export default Project
