import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"; 
import Navbar from "./components/navbar";
import Home from "./components/home";
import Recipe from "./components/recipe";
import Menu from "./components/menu";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/" component={Recipe} />
            <Route path="/menu/" component={Menu} />
          </Switch>
        </div>
      </BrowserRouter>
    ); 
  }
}
export default App;
