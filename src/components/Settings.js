import React from "react";
import "../css/settings.css";

const Settings = ({ setKapak, setBagli }) => {
  return (
    <div className="cerceve">
      <div className="settings-container">
        <div className="section-left">
          <div className="test-section">
            <h3 className="h3">OPTOMO DEVICE TEST</h3>
            <hr className="hr ortala" />
            <div className="ortala">
              <p className="p">X-RAY TEST</p>
            </div>
            <button className="ortala button">TEST</button>
            <hr />
            <div className="ortala">
              <p className="p">Kapak Ayarlama</p>
            </div>
            <button
              onClick={() => {
                setKapak(true);
              }}
              className="ortala button"
            >
              Kapat
            </button>
            <button
              onClick={() => {
                setKapak(false);
              }}
              className="ortala button"
            >
              Aç
            </button>
            <hr />
            <div className="ort">
              <p className="p">HORIZONTAL MOTION TEST</p>
            </div>
            <p className="p">
              SCANNING ANGLE: <input className="input" type="text" />
            </p>
            <p className="p">
              PROJECTION NUMBER: <input className="input" type="text" />
            </p>
            <button className="ortala button">TEST</button>
            <hr />
            <div className="ort">
              <p className="p">HORIZONTAL MOTION TEST</p>
            </div>
            <div className="horizontal-motion">
              <p className="p">
                STEP: <input className="input" type="text" />
              </p>
              <div className="step-buttons">
                <button className="increase-button button btn2">+</button>
                <button className="decrease-button button btn2">-</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section-right">
          <div className="connection-section">
            <h3 className="h3">E CONNECTION SETTINGS</h3>
            <hr />
            <p className="p">
              <button onClick={() => setBagli(true)} className="button btn2">
                CONNECT
              </button>{" "}
              <input className="input" type="text" />
            </p>
            <p className="p">
              <button className="button btn2">DISCONNECT</button>{" "}
              <input className="input" type="text" />
            </p>
          </div>
          <div className="parameters-section">
            <h3 className="h3">ANGULAR SCANNING PARAMETERS</h3>
            <hr />
            <div className="ort h3">
              <p className="p">RECONSTRUCTION</p>
            </div>
            <p className="p">
              SCANNING ANGLE: <input className="input" type="text" />
            </p>
            <p className="p">
              PROJECTION NUMBER: <input className="input" type="text" />
            </p>
            <button className="button">START</button>
            <button className="button">STOP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
