import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Panel from './panel.jsx'
import ContentList from './contentList.jsx'
import Project from "./project.jsx"

function App() {
  return (
    <Router>
      <div>
        <Panel />
          <Switch>
            <Route path="/project/:id" component={Project} />
            <Route path="/"  component={ContentList} />
          </Switch>
      </div>
</Router>
  );
}

export default App;
