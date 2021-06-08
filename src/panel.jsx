import React,{useState} from 'react'
import './styles.css'


function Panel(){
const [statePanel, setPanel ] = useState(true)
  const panelToggle = () => {
   setPanel(!statePanel)
    }

  return(
      <div id="hideShow" className={statePanel== true ? "mainPanel":"mainPanel-active"}>
      <span onClick={panelToggle} className="movePanel">
      <p> >
      </p>
      </span>
      <div className="innerPanel">
      <h1>tittle</h1>
      </div>
      </div>
  )
 }


export default Panel;
