import React, {Component} from 'react';
import Webcam from 'react-webcam';
import WebcamCapture from './components/webcam.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp.js';


class App extends Component {

  render() {

    return (
      
      <div>
        <NavbarComp/>
        <div className='head'>
          <h2>Mansea</h2>
        </div>
        <WebcamCapture/>
      </div>
      )
  }
}



export default App;