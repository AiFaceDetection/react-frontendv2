import React, {useState} from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width : 1920,
    height : 1080,
    facingMode: 'user'
  };
  const[name, setName] = useState('')
  const capture = React.useCallback(
  () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`)
                //for deployment, you should put your backend url / api
    axios.post('https://flask-face-backend.herokuapp.com/api', {data : imageSrc})
        .then(res => {
        console.log(`response = ${res.data}`)
        setName(res.data)
    })
        .catch(error => {
        console.log(`error = ${error}`)
    })
  }, 
   [webcamRef]
  );
  
  return (
  <div>
    <Webcam
     audio = {false}
	 height = {1080*0.4}
	 ref = {webcamRef}
	 screenshotFormat = "image/jpeg"
	 width = {1920*0.4}
	 videoConstraints = {videoConstraints}
	/>
    <button onClick={capture}>Click Me!</button>
	<h2>{name}</h2>
  </div>
	);
  
};

export default WebcamCapture;