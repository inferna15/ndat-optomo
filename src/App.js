import { useState } from "react";
import "./css/App.css";
import TopMenu from "./components/TopMenu";
import Hastalarim from "./components/Hastalarim";
import GoruntuKart from "./components/GoruntuKart";
import Login from "./components/Login";
import Settings from "./components/Settings";

function App() {
  let DBhastalar = [
    {
      id: 0,
      ad: "özge",
      soyad: "can",
      tc: "12369854725",
      goruntuler: [
        {
          id: 0,
          tarih: "10-01-2000",
          threeD: "",
          paths: [
            "./db/0/0/270.bmp",
            "./db/0/0/285.bmp",
            "./db/0/0/300.bmp",
            "./db/0/0/315.bmp",
            "./db/0/0/330.bmp",
            "./db/0/0/345.bmp",
          ],
        },
      ],
      raporlar: [
        {
          id: 0,
          tarih: "10-01-2000",
          sonuc: "true",
          text: "Sağ meme invaziv duktal karsinom (IDC)",
        },
      ],
    },
    {
      id: 1,
      ad: "ayşe",
      soyad: "özlem",
      tc: "47896312457",
      goruntuler: [
        {
          id: 0,
          tarih: "15-01-2010",
          threeD: "",

          paths: ["./db/1/0/015.bmp", "./db/1/0/030.bmp"],
        },
        {
          id: 1,
          tarih: "17-02-2010",
          threeD: "",
          paths: [
            "./db/1/1/000.bmp",
            "./db/1/1/045.bmp",
            "./db/1/1/060.bmp",
            "./db/1/1/075.bmp",
          ],
        },
      ],
      raporlar: [
        {
          id: 0,
          tarih: "15-01-2010",
          sonuc: "false",
          text: "Sağ memede kontrast madde tutulumu gösteren, düzensiz kenarlı bir lezyon tespit edildi.",
        },
        {
          id: 1,
          tarih: "17-02-2010",
          sonuc: "true",
          text: "Lezyonun malign özellikler taşıdığı değerlendirildi.",
        },
      ],
    },
    {
      id: 2,
      ad: "zeynep",
      soyad: "kara",
      tc: "56478963214",
      goruntuler: [
        {
          id: 0,
          tarih: "23-09-2020",
          threeD: "",
          paths: ["./db/2/0/150.bmp", "./db/2/0/165.bmp"],
        },
        {
          id: 1,
          tarih: "30-11-2020",
          threeD: "",
          paths: [
            "./db/2/1/090.bmp",
            "./db/2/1/105.bmp",
            "./db/2/1/120.bmp",
            "./db/2/1/135.bmp",
          ],
        },
      ],
      raporlar: [
        {
          id: 0,
          tarih: "23-09-2020",
          sonuc: "true",
          text: "Sağ memede kontrast madde tutulumu gösteren, düzensiz kenarlı bir lezyon tespit edildi.",
        },
        {
          id: 1,
          tarih: "30-11-2020",
          sonuc: "false",
          text: "Sağ memede palpasyonla sert ve düzensiz kenarlı bir kitle tespit edildi. Meme cildinde portakal kabuğu görünümü ve meme ucunda çekilme mevcut.",
        },
      ],
    },
    {
      id: 3,
      ad: "fatma",
      soyad: "turan",
      tc: "72589463120",
      goruntuler: [
        {
          id: 0,
          tarih: "02-07-2024",
          threeD: "",
          paths: ["./db/3/0/180.bmp", "./db/3/0/195.bmp"],
        },
        {
          id: 1,
          tarih: "02-11-2024",
          threeD: "",
          paths: ["./db/3/1/210.bmp", "./db/3/1/225.bmp"],
        },
        {
          id: 2,
          tarih: "25-02-2025",
          threeD: "",
          paths: ["./db/3/2/240.bmp", "./db/3/2/255.bmp"],
        },
      ],
      raporlar: [
        {
          id: 0,
          tarih: "02-07-2024",
          sonuc: "false",
          text: "Sağ memede üst dış kadranda yaklaşık 3 cm çapında, düzensiz kenarlı, yüksek yoğunluklu bir kitle izlendi.",
        },
        {
          id: 1,
          tarih: "02-11-2024",
          sonuc: "true",
          text: "Sağ memede 2.9 x 3.1 cm boyutlarında, düzensiz konturlu, hipoekoik bir kitle izlendi.",
        },
        {
          id: 2,
          tarih: "25-02-2025",
          sonuc: "false",
          text: "Lenf nodları normal sınırlar içinde.",
        },
      ],
    },
    {
      id: 4,
      ad: "aysun",
      soyad: "demir",
      tc: "63897421589",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 5,
      ad: "selin",
      soyad: "yılmaz",
      tc: "89547123698",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 6,
      ad: "esra",
      soyad: "koç",
      tc: "36589741230",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 7,
      ad: "gizem",
      soyad: "şahin",
      tc: "14798563214",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 8,
      ad: "elif",
      soyad: "aydın",
      tc: "89654723140",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 9,
      ad: "deniz",
      soyad: "çelik",
      tc: "98563214789",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 10,
      ad: "irem",
      soyad: "kurt",
      tc: "23147896542",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 11,
      ad: "aylin",
      soyad: "güler",
      tc: "36987412580",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 12,
      ad: "melike",
      soyad: "erdoğan",
      tc: "74859632140",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 13,
      ad: "ebru",
      soyad: "aslan",
      tc: "63214798536",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 14,
      ad: "merve",
      soyad: "şen",
      tc: "41236987520",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 15,
      ad: "yasemin",
      soyad: "öztürk",
      tc: "58741236985",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 16,
      ad: "begüm",
      soyad: "aktaş",
      tc: "96532147836",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 17,
      ad: "ilayda",
      soyad: "yıldız",
      tc: "14785236987",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 18,
      ad: "şeyma",
      soyad: "bulut",
      tc: "98741236589",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 19,
      ad: "nur",
      soyad: "karadağ",
      tc: "63214789536",
      goruntuler: null,
      raporlar: null,
    },
    {
      id: 20,
      ad: "pınar",
      soyad: "keskin",
      tc: "89563214701",
      goruntuler: null,
      raporlar: null,
    },
  ];

  const [login, setLogin] = useState("unlogin");
  const [mainTab, setMainTab] = useState("anasayfa");
  const [hastaID, setHastaID] = useState(0);
  const [hastalar, setHastalar] = useState(DBhastalar);
  const [workTab, setWorkTab] = useState("goruntuler");
  const [kapak, setKapak] = useState(false);
  const [bagli, setBagli] = useState(false);
  const [incele, setIncele] = useState("2D");
  const [src, setSrc] = useState({
    id: 0,
    tarih: "",
    path: "",
  });
  const [rapor, setRapor] = useState({
    id: 0,
    tarih: "",
    sonuc: "",
    text: "",
  });
  const [raporState, setRaporState] = useState("incele");

  return (
    <div className="App">
      {login === "login" && (
        <TopMenu setLogin={setLogin} setMainTab={setMainTab} />
      )}
      {login === "login" && mainTab === "anasayfa" && (
        <div className="main">
          <div className="sidebar">
            <Hastalarim
              hastalar={hastalar}
              setHastalar={setHastalar}
              setHastaID={setHastaID}
            />
            <div className="hastam">
              <div className="info">
                <p>{hastalar.find((hasta) => hasta.id === hastaID).ad}</p>
                <p>{hastalar.find((hasta) => hasta.id === hastaID).soyad}</p>
                <p>{hastalar.find((hasta) => hasta.id === hastaID).tc}</p>
              </div>
              <div className="buttons">
                <button onClick={() => setWorkTab("goruntuler")}>
                  Görüntüler
                </button>
                <button onClick={() => setWorkTab("raporlar")}>Raporlar</button>
              </div>
            </div>
          </div>
          {workTab === "goruntuler" && (
            <div className="goruntuler">
              <div className="left-side">
                <div className="goruntual">
                  {kapak && bagli && (
                    <>
                      <button>Görüntü Al</button>
                      <p>Cihaz görüntü almak için hazır.</p>
                    </>
                  )}
                  {!kapak && bagli && (
                    <>
                      <button disabled>Görüntü Al</button>
                      <p>Cihazın kapağı açık. Lütfen kapağı kapatın.</p>
                    </>
                  )}
                  {!bagli && (
                    <>
                      <button disabled>Görüntü Al</button>
                      <p>Cihaz bağlı değil. Ayarlar kısmından bağlayın.</p>
                    </>
                  )}
                </div>
                <div className="goruntuliste">
                  {DBhastalar.find(
                    (hasta) => hasta.id === hastaID
                  ).goruntuler.map((goruntu) => (
                    <GoruntuKart setSrc={setSrc} goruntu={goruntu} />
                  ))}
                </div>
              </div>
              <div className="right-side">
                {incele === "2D" && (
                  <div className="incele2D">
                    <img src={src.path} alt="image" />
                    <p>ID: {src.id}</p>
                    <p>Tarih: {src.tarih}</p>
                  </div>
                )}
                {incele === "3D" && (
                  <div className="incele3D">
                    <div className="turn3d">
                      <video src=""></video>
                      <p>{src.id}</p>
                      <p>{src.tarih}</p>
                    </div>
                    <div className="xyz">
                      <div className="x-eksen"></div>
                      <div className="y-eksen"></div>
                      <div className="z-eksen"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {workTab === "raporlar" && (
            <div className="raporlar">
              <div className="left-side">
                <div className="rapor-ekle">
                  <button onClick={() => setRaporState("olustur")}>
                    Yeni Rapor Oluştur
                  </button>
                </div>
                <div className="raporliste">
                  {DBhastalar.find(
                    (hasta) => hasta.id === hastaID
                  ).raporlar.map((ra) => (
                    <div className="rapor">
                      <div>
                        <p>
                          Tarih: {ra.tarih} ID: {ra.id}
                        </p>
                        <p>Sonuç: {ra.sonuc}</p>
                      </div>
                      <button
                        onClick={() => {
                          setRapor({
                            id: ra.id,
                            tarih: ra.tarih,
                            sonuc: ra.sonuc,
                            text: ra.text,
                          });
                        }}
                      >
                        Seç
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="right-side">
                {raporState === "incele" && (
                  <div className="raporincele">
                    <div>
                      <p>ID: {rapor.id}</p>
                      <p>Tarih: {rapor.tarih}</p>
                      <p>Sonuç: {rapor.sonuc} </p>
                      <p>İçerik: {rapor.text}</p>
                    </div>
                  </div>
                )}
                {raporState === "olustur" && (
                  <div className="raporekle">
                    <label htmlFor="">Sonuç:</label>
                    <input id="sonuc" type="text" />
                    <label htmlFor="">Yazı:</label>
                    <textarea name="" id="text"></textarea>
                    <button
                      onClick={() => {
                        setRaporState("incele");
                        let zaman = new Date();
                        let son = document.getElementById("sonuc").innerText;
                        let yazi = document.getElementById("text").innerText;
                        DBhastalar.find(
                          (hasta) => hasta.id === hastaID
                        ).raporlar.push({
                          id: DBhastalar.find((hasta) => hasta.id === hastaID)
                            .raporlar.length,
                          tarih:
                            zaman.getDay +
                            "-" +
                            zaman.getMonth +
                            "-" +
                            zaman.getFullYear,
                          sonuc: son,
                          text: yazi,
                        });
                      }}
                    >
                      Oluştur
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
      {login === "login" && mainTab === "ayarlar" && (
        <Settings setKapak={setKapak} setBagli={setBagli} />
      )}
      {login === "unlogin" && <Login setLogin={setLogin} />}
    </div>
  );
}

export default App;
