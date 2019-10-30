import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Search from './components/Search'
import  './App.css'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Search" component={Search}></Route>
      </div>   
    </Router>
  );
}

export default App;
