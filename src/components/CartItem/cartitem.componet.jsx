//Imports
import React,{ useContext } from "react";
import { CartContext } from "../../Context/cartcontext.component";
import "./cartitem.component.css";


//Componente
export const CartItem = (props) => {


  //Componente por Props comprado
  const { item, cantidad } = props.item;


  //Hooks
  const contexto = useContext(CartContext);



  //Imprime Items comprados
  return (
    <div className="cart-item-container">
      <div>
        <img src={item.img} className="cart-item-img" alt="Imagen de producto"/>
      </div>
      <div className="cart-item-description">
        <div className="cart-item-name">{item.name}</div>
        <div>{item.description}</div>
        <div>
          Precio unitario:{" "}
          <span className="cart-item-precio">${item.price}</span> - cantidad:{" "}
          <span className="cart-item-precio">{cantidad}</span> - total:{" "}
          <span className="cart-item-precio">${cantidad * item.price}</span>
        </div>
      </div>
      <div>
        {/*Boton de borrar articulo del carrito*/}
        <button           
        onClick={() => {
            contexto.eliminarItem(item.id);
          }}> X 
        </button>
      </div>
    </div>
  );
};
