import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Panel from './panel.jsx'

function App() {
  return (
      <div>
        <Panel />
      </div>

  );
}

export default App;
