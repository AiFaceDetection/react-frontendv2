import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import WebcamCapture from "./webcam.js";
import "./styles/Register.css";

export default class Register extends Component {
  render() {
    return (
      <div>
        <br></br>
        <Container>
          <div class="containerBox">
            <div class="row">
              <div class="col-lg-11">
                <h1>Register</h1>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>
        </Container>
        <br></br>
      </div>
    );
  }
}
