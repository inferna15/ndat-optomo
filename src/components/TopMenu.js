import React from "react";

function TopMenu({ setLogin, setMainTab }) {
  return (
    <div className="topmenu">
      <div className="left-side">
        <img className="logo" src="./imgs/logo.jpeg" alt="logo" />
        <button onClick={() => setMainTab("anasayfa")}>Ana Sayfa</button>
        <button onClick={() => setMainTab("ayarlar")}>Ayarlar</button>
      </div>
      <div className="right-side">
        <img className="dr-image" src="./imgs/dr-image.png" alt="dr-image" />
        <div className="dr-name">Dr. Nihat Sakin</div>
        <button onClick={() => setLogin("unlogin")}>Çıkış Yap</button>
      </div>
    </div>
  );
}

export default TopMenu;
