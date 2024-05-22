import React, { useState } from "react";
import HastaKart from "./HastaKart";

function Hastalarim({ hastalar, setHastalar, setHastaID }) {
  const [tab, setTab] = useState("ara");

  function hastaEkle() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let tc = document.getElementById("tc").value;
    let id = hastalar.length;
    let temp = [...hastalar];
    temp.push({ id: id, ad: name, soyad: surname, tc: tc, goruntuler: null, raporlar:null });
    setHastalar(temp);
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("tc").value = "";
  }

  return (
    <div className="hastalarim">
      <div className="buttons">
        <button onClick={() => setTab("ara")}>Hasta Ara</button>
        <button onClick={() => setTab("ekle")}>Hasta Ekle</button>
        <button onClick={() => setTab("sil")}>Hasta Sil</button>
      </div>
      {(tab === "ara" || tab === "sil") && (
        <HastaKart
          btn={tab}
          hastalar={hastalar}
          setHastalar={setHastalar}
          setHastaID={setHastaID}
        />
      )}
      {tab === "ekle" && (
        <div className="hastaekle">
          <label htmlFor="name">
            Ad:
            <input type="text" id="name" />
          </label>
          <label htmlFor="name">
            Soyad:
            <input type="text" id="surname" />
          </label>
          <label htmlFor="name">
            TC:
            <input type="text" id="tc" />
          </label>
          <button onClick={hastaEkle}>Hasta Ekle</button>
        </div>
      )}
    </div>
  );
}

export default Hastalarim;
