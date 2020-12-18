//imports
import React from "react";
import { Link } from "react-router-dom";
import "./item.component.css";



//componente
export const Item = (props) => {

  //paso por propos el items seleccionado 
  const { item } = props;


  //imprimo card de items
  return (
    <Link to={`/producto/${item.id}`} className="router-link">
      <div className="card m-3 p-3 shadow">
        <img src={item.img} className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text precio">${item.price}</p>
        </div>
      </div>
    </Link>
  );
};