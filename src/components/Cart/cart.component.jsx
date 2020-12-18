//Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/cartcontext.component";
import { CartItem } from "../CartItem/cartitem.componet";
import "./cart.component.css";


//Componente
export const Cart = () => {

  //Hooks
  const contexto = useContext(CartContext);


  //Imprime lista de Carrito
  if (contexto.pedido.length === 0) {
    return (
      <div className="cart-empty">
        Carrito Vacio
      </div>
    );
  } else {
    return (
      <div>
        <div className="cart-list">
          {contexto.pedido.map((item, indice) => {
            return <CartItem item={item} key={indice} />;
          })}
        </div>
        <div className="row">

          <Link to={`/`} >
            <div className="vermas">
              <button className="col-2">Ver mas productos</button>
            </div>
          </Link>

          <Link to={`/verificar`} >
            <button className="cart-finalize-button">
              Finalizar Compra
            </button>
          </Link>

          <div className="cart-total col-4">TOTAL: ${contexto.montoTotalPedido}</div>
        </div>
      </div>
    );
  }
};
