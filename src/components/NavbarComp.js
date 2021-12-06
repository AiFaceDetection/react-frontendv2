import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./Homepage";
import Register from "./Register";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Face Recognition</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
      <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </div>
      </Router>
    );
  }
}
