import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";

import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();

  const save = () =>
    setImageUrl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>Signature Pad Example</h1>
      <Popup
        modal
        trigger={<button className="btn">Open Signature Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
            />

            <button className="btn" onClick={save}>
              Save
            </button>
            <button className="btn" onClick={clear}>
              Clear
            </button>
            <button className="btn" onClick={close}>
              Close
            </button>
          </>
        )}
      </Popup>
      <br />
      <br />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="my signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "1px solid black",
            width: 150
          }}
        />
      )}
    </div>
  );
}

export default App;
