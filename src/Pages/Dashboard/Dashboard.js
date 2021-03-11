import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Api from "../../Services/Api";
import "./Styles.css";

export default function Dashboard() {
  //! Spots é o status, e o setSpots é o metodo que atualiza o valor do spots, porem para
  //! utilizar esse metodo é obrigatório a importação do useState do React, e especificar que tipo de valor
  //! o status vai receber
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await Api.get("/dashboard", {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []);
  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header
              style={{
                backgroundImage: `url(${spot.thumbnail_url})`
              }}
            />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : "Gratuito"}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn">Cadastrar novo Spot</button>
      </Link>
    </>
  );
}
