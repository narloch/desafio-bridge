import React from "react";
import Home from "./views/";
import './App.css';
import Repository from "./views/repo/repo";
import Header from "./components/header/header"
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div>
      <Router>
      <Header />
          <Route path="/" exact={true} component={Home}/>
          <Route path="/repo" component={Repository}/>
      </Router>
      </div>
    </div>
  );
}

export default App;
