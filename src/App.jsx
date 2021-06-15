import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Panel from './panel.jsx'
import ContentList from './contentList.jsx'

function App() {
  return (
      <div>
        <Panel />
        <ContentList />
      </div>

  );
}

export default App;
