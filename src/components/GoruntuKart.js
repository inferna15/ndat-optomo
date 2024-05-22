import React from "react";

function GoruntuKart({ goruntu, setSrc }) {
  return (
    <div className="goruntukart">
      <div className="title">
        <h3>Tarih : {goruntu.tarih}</h3>
        <button>3D</button>
      </div>
      <div className="fotos">
        {goruntu.paths.map((foto, i) => (
          <button>
            <img src={foto} alt="img" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default GoruntuKart;

/* onClick={setSrc({
              id: goruntu.id,
              tarih: goruntu.tarih,
              path: foto,
            })} */
