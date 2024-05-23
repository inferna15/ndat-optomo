import React from "react";
//import './style.css';

const Settings = ({ setKapak, setBagli }) => {
  return (
    <div className="settings-container">
      <div className="section-left">
        <div className="test-section">
          <h3>OPTOMO DEVICE TEST</h3>
          <hr className="bosluk" />
          <div className="ortala">
            <p>X-RAY TEST</p>
          </div>
          <button className="ortala">TEST</button>
          <hr />
          <div className="ortala">
            <p>Kapak Ayarlama</p>
          </div>
          <button
            onClick={() => {
              setKapak(true);
            }}
            className="ortala"
          >
            Kapat
          </button>
          <button
            onClick={() => {
              setKapak(false);
            }}
            className="ortala"
          >
            Aç
          </button>
          <hr />
          <div className="ort">
            <p>HORIZONTAL MOTION TEST</p>
          </div>
          <p>
            SCANNING ANGLE: <input type="text" />
          </p>
          <p>
            PROJECTION NUMBER: <input type="text" />
          </p>
          <button className="ortala">TEST</button>
          <hr />
          <div className="ort">
            <p>HORIZONTAL MOTION TEST</p>
          </div>
          <div className="horizontal-motion">
            <p>
              STEP: <input type="text" />
            </p>
            <div className="step-buttons">
              <button className="increase-button btn2">+</button>
              <button className="decrease-button btn2">-</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-right">
        <div className="connection-section">
          <h3>E CONNECTION SETTINGS</h3>
          <hr />
          <p>
            <button onClick={() => setBagli(true)} className="btn2">
              CONNECT
            </button>{" "}
            <input type="text" />
          </p>
          <p>
            <button className="btn2">DISCONNECT</button> <input type="text" />
          </p>
        </div>
        <div className="parameters-section">
          <h3>ANGULAR SCANNING PARAMETERS</h3>
          <hr />
          <div className="ort">
            <p>RECONSTRUCTION</p>
          </div>
          <p>
            SCANNING ANGLE: <input type="text" />
          </p>
          <p>
            PROJECTION NUMBER: <input type="text" />
          </p>
          <button>START</button>
          <button>STOP</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
