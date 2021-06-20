
import ReactDOM from 'react-dom';
import './styles.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Panel from './panel.jsx'
import ContentList from './contentList.jsx'
import Project from "./project.jsx"
import React,{useState, useEffect} from 'react'

function App() {

  useEffect(()=>{
      getData()
    },[])

  async function getData(){
   let data = await fetch("/projectData.json")
   let response = await data.json();
   dataSet(response)
 }
  let [dataState, dataSet] = useState([])

  return (
    <Router>
      <div>
        <Panel />
          <Switch>
            <Route path="/project/:id" render={(props)=> <Project {...props} data={dataState} />} />
            <Route path="/"  render={()=> <ContentList data={dataState}/>} />
          </Switch>
      </div>
</Router>
  );
}

export default App;
