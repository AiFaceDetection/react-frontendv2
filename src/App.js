import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComp />
      </div>
    );
  }
}

export default App;
