import React, { useState } from "react";

function HastaKart({ btn, hastalar, setHastalar, setHastaID }) {
  const [arama, setArama] = useState("");

  let liste = hastalar.map((hasta) => ({
    id: hasta.id,
    tamad: `${hasta.ad} ${hasta.soyad}`,
    tc: hasta.tc,
  }));
  let list1 = liste.filter(
    (hasta) => hasta.tamad.indexOf(arama.toLowerCase()) >= 0
  );
  let list2 = liste.filter((hasta) => hasta.tc.indexOf(arama) >= 0);
  let listem = [...new Set([...list1, ...list2])];

  function hastaSil(id) {
    let temp = [...hastalar];
    const index = temp.findIndex((hasta) => hasta.id === id);
    if (index !== -1) {
      temp.splice(index, 1);
      setHastalar(temp);
    }
  }

  return (
    <div className="hastaarama">
      <div className="search">
        <label htmlFor="arama">Hasta Arama</label>
        <input
          type="text"
          name="arama"
          id="arama"
          value={arama}
          onChange={(e) => setArama(e.target.value)}
        />
      </div>
      <div className="hastalist">
        {listem.map((hasta) => (
          <div className="hastakart">
            <div>
              <p>{hasta.tamad}</p>
              <p>
                {hasta.tc} {hasta.id}{" "}
              </p>
            </div>
            {btn === "ara" && (
              <button onClick={() => setHastaID(hasta.id)}>Seç</button>
            )}
            {btn === "sil" && (
              <button onClick={() => hastaSil(hasta.id)}>Sil</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HastaKart;
