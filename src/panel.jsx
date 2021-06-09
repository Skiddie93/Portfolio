import React,{useState} from 'react'
import './styles.css'


function Panel(){
const [statePanel, setPanel] = useState(true)
const panelToggle = () => {
   setPanel(!statePanel)
    }

  return(
      <div id="hideShow" className={ statePanel ? 'mainPanel'  :  'mainPanel frajer'}>
      <span onClick={panelToggle} className="movePanel">
      <svg className={ statePanel ? 'svgOpen'  :  'svgOpen close'} viewBox="0 0 24 24">
  <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>
      </span>
      <div className="innerPanel">
      <h1>tittle</h1>
      </div>
      </div>
  )
 }


export default Panel;
