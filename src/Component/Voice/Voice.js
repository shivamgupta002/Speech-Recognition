import React from "react";
import "../Section/Section.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Voice = () => {
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="container">
        <h2>Speech to text convertor</h2>
        <div className="container">
          <h1 className="heading">Enter Your Text</h1>

          <div className="textarea" >
            <div className="textBox" id="myBox">
              {transcript}
            </div>
            {/* <textarea name="textarea" cols="90" rows="8" id="myBox">
              {transcript}
            </textarea> */}
          </div>
        </div>
        <div className="buttons">
          <button className="button" onClick={startListening}>
            Start Listening
          </button>
          <button className="button" onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
          <button className="button">copy</button>
        </div>
      </div>
    </>
  );
};

export default Voice;
