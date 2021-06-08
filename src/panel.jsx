import React,{useState} from 'react'
import './styles.css'


function Panel(){
  const [panelPos, setPanel] = useState(true)
  const panelToggle = () => {
    setPanel(!panelPos);  };
  return(
      <div id="hideShow" className="mainPanel">
      <span onclick={panelToggle} className="movePanel">
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
