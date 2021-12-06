import React, { Component } from "react";
import { Container, Accordion } from "react-bootstrap";
import WebcamCapture from "./webcam.js";
import "./styles/Homepage.css";

export default class Homepage extends Component {
    
  render() {
    return (
      <div>
        <br></br>
        <Container>
          <div class="containerBox">
            <div class="row">
              <div class="col-lg-11">
                <h1>eKYC Software</h1>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Instruction</Accordion.Header>
                    <Accordion.Body class="text-black">
                      <p>
                      Step 1: จัดตำแหน่งตนเอง <strong>ให้อยู่ในกรอบ</strong><br></br>
                      Step 2: กรอบฝั่ง <strong>ซ้าย</strong> คือกรอบของ <strong>บัตรนักศึกษา</strong><br></br>
                      Step 3: กรอบฝั่ง <strong>ขวา</strong> คือกรอบของ <strong>นักศึกษา</strong><br></br>
                      Step 4: เมื่อพร้อม ให้กดปุ่ม <strong>"Compare"</strong> เพื่อทำการเปรียบเทียบหน้าและบัตรว่าเป็นคนเดัยวกันไหม<br></br>
                      Step 4: เมื่อพร้อม ให้กดปุ่ม <strong>"Identify"</strong> เพื่อทำการเปรียบเทียบหน้าว่าอยู่ในระบบไหม<br></br>
                      Step 5: <strong>ดูผลลัพธ์</strong> ที่แสดงภายในหน้าจอ<br></br>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <br></br>
                <WebcamCapture />
              </div>
            </div>
          </div>
        </Container>
        <br></br>
      </div>
    );
  }
}
