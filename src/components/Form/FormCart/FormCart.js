import React, { useState } from "react";
import "./FormCart.css";

function FormCart() {
  const [imeNaKartici, setImeNaKartici] = useState("");
  const [brojKartice, setBrojKartice] = useState("");
  const [datumIsticanja, setDatumIsticanja] = useState("");
  const [sigurnosniKod, setSigurnosniKod] = useState("");
  const [greske, setGreske] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const novaGreska = {};

    if (imeNaKartici.trim() === "") {
      novaGreska.imeNaKartici = "Molimo unesite ime na kartici.";
    }

    if (brojKartice.trim() === "") {
      novaGreska.brojKartice = "Molimo unesite broj kartice.";
    }

    if (datumIsticanja.trim() === "") {
      novaGreska.datumIsticanja = "Molimo unesite datum ističanja.";
    }

    if (sigurnosniKod.trim() === "") {
      novaGreska.sigurnosniKod = "Molimo unesite sigurnosni kod.";
    }

    if (Object.keys(novaGreska).length === 0) {
      console.log("Podaci kartice:", {
        imeNaKartici,
        brojKartice,
        datumIsticanja,
        sigurnosniKod,
      });

      setImeNaKartici("");
      setBrojKartice("");
      setDatumIsticanja("");
      setSigurnosniKod("");
      setGreske({});
    } else {
      setGreske(novaGreska);
    }
  };

  return (
    <div className="container">
      <h2>Dodavanje kreditne kartice</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ime">Ime na kartici:</label>
        <input
          type="text"
          id="ime"
          value={imeNaKartici}
          onChange={(e) => setImeNaKartici(e.target.value)}
          required
        />
        {greske.imeNaKartici && <p>{greske.imeNaKartici}</p>}
        <br />
        <br />

        <label htmlFor="broj_kartice">Broj kartice:</label>
        <input
          type="text"
          id="broj_kartice"
          value={brojKartice}
          onChange={(e) => setBrojKartice(e.target.value)}
          required
        />
        {greske.brojKartice && <p>{greske.brojKartice}</p>}
        <br />
        <br />
        <div className="wrap">
          <label htmlFor="datum_isticanja">Datum isticanja:</label>
          <input
            type="text"
            id="datum_isticanja"
            value={datumIsticanja}
            onChange={(e) => setDatumIsticanja(e.target.value)}
            placeholder="MM/GG"
            required
          />
          {greske.datumIsticanja && <p>{greske.datumIsticanja}</p>}
          <br />
          <br />

          <label htmlFor="sigurnosni_kod">Sigurnosni kod:</label>
          <input
            type="text"
            id="sigurnosni_kod"
            value={sigurnosniKod}
            onChange={(e) => setSigurnosniKod(e.target.value)}
            required
          />
          {greske.sigurnosniKod && <p>{greske.sigurnosniKod}</p>}
          <br />
          <br />
        </div>
        <div className="button">
          <input type="submit" value="Dodaj karticu" />
        </div>
      </form>
    </div>
  );
}

export default FormCart;
