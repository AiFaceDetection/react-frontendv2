import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import "./styles/webcam.css";
import { Container, Spinner } from "react-bootstrap";

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };
  const [name, setName] = useState("");
  const [compare, setCompare] = useState("");
  const [loading, setLoading] = useState("");
  const [loadingIden, setLoadingIden] = useState("");

  const capture = React.useCallback( async () => {
    setLoadingIden(true);
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(`imageSrc = ${imageSrc}`);
    //for deployment, you should put your backend url / api
    await axios
      .post("https://flask-face-backend.herokuapp.com/api", { data: imageSrc })
      .then((res) => {
        console.log(`response = ${res.data}`);
        setName(res.data);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
      setLoadingIden(false);
  }, [webcamRef]);

  const compareFace = React.useCallback(
    async () => {
      setLoading(true);
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(`imageSrc = ${imageSrc}`);
      //for deployment, you should put your backend url / api
      await axios
        .post("https://flask-face-backend.herokuapp.com/apii", {
          data: imageSrc,
        })
        .then((res) => {
          console.log(`response = ${res.data}`);
          setCompare(res.data);
        })
        .catch((error) => {
          console.log(`error = ${error}`);
        });
      setLoading(false);
    },
    [webcamRef]
  );

  return (
    <div>
      <Container>
        <Webcam
          audio={false}
          height={1080 * 0.4}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1920 * 0.4}
          videoConstraints={videoConstraints}
        />
      </Container>
      <br></br>
      <button class="identifyBtn" onClick={compareFace} disable={loading}>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Compare"
        )}
      </button>
      <button class="identifyBtn" onClick={capture}>
        {loadingIden ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Identify"
        )}
      </button>

      <br></br>
      <h2>Compare: {compare}</h2>

      <h2>Identify: {name}</h2>
    </div>
  );
};

export default WebcamCapture;
