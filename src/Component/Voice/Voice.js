import React, { useState } from "react";
// import "../Section/Section.css";
import "./Voice.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const Voice = () => {
  const [textToCopy, setTextToCopy] = useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy);
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

          <div className="textarea">
            <div
              className="textBox"
              id="myBox"
              onClick={() => setTextToCopy(transcript)}
            >
              {transcript}
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="button" onClick={startListening}>
            Start Listening
          </button>
          <button className="button" onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
          <button onClick={setCopied} className="button">
            {isCopied ? "Copied 👍" : "Copy to ClipBoard"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Voice;
