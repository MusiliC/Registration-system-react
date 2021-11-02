import "./App.css";
import Login from "./components/Login";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import State from "./components/State";
import React, { useState } from "react";


function App() {



  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/state" component={State} />
      </Switch>

   
    </div>
  );
}

export default App;
