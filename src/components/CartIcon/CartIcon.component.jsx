//Imports
import React,{ useContext } from "react";
import { CartContext } from "../../Context/cartcontext.component";
import "./cart-icon.component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'


//Componente
export const CartIcon = () => {

  //Hooks
  const contexto = useContext(CartContext);


  //Imprime
  return (
    <div>
      <FontAwesomeIcon icon={faWineGlassAlt} className="h1 text-white"/>
      {contexto.cantidadItemsPedido !== 0 && (
        <span className="cart-icon-count">{contexto.cantidadItemsPedido}</span>
      )}
    </div>
  );
};
