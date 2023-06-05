import React, { useState } from "react";
import "./OrderForm.css";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, address, postalCode);

    setName("");
    setEmail("");
    setAddress("");
    setPostalCode("");
  };

  return (
    <div className="Adresscontainer">
      <form className="formAdress" onSubmit={handleSubmit}>
        <h2>Dodavanje Adrese</h2>

        <label className="label">
          Ime i Prezime:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="label">
          Adresa:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label className="label">
          Poštanski kod:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </label>
        <div className="button">
          <button type="submit">Dodaj Adresu</button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
