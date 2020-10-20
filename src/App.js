import React from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import { Route, Switch } from "react-router-dom";
import Intro from './Components/Intro/Intro'
import Galery from './Components/Galery/Galery.js'
export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/galery"><Galery/></Route>
        <Route path="/">
          <Intro/>
        </Route>
        {/* <Route path="">

        </Route> */}
      </Switch>
    </div>
  );
}
