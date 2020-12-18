//Imports
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ItemCount } from "../ItemCount/itemcount.component";
import { CartContext } from "../../Context/cartcontext.component";
import "./item-detail.component.css";



//Componente
export const ItemDetail = (props) => {

  //paso por props item seleccionado
  const { item } = props;



  //Hooks
  const [cantidad, setCantidad] = useState(1);
  const contexto = useContext(CartContext);
  const history = useHistory();



  //Seteo cantidad de productos
  const actualizarCantidad = (valor) => {
    setCantidad(valor);
  };



  //funcion de agregar al carrito
  const comprar = () => {
    contexto.agregarItem(item, cantidad);
    history.push("/carrito");
  };

  //Imprimo items seleccionado por id
  return (
    <div className="card mb-3 item-detail-card shadow">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.img} className="card-img" alt={item.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body item-detail-card-description">
            <div className="item-detail-card-description-body">
              <h5 className="card-title item-detail-name">{item.name}</h5>
              <p className="card-text item-detail-info">{item.description}</p>
              <p className="card-text item-detail-precio">${item.price}</p>
            </div>    
              {/* Boton de agregar al carrito por cantidad*/}
            <div className="item-detail-card-description-footer">
              <ItemCount
                initial={1}
                min={1}
                max={item.stock}
                onAdd={actualizarCantidad}
              />
              <button className="item-detail-button-comprar" onClick={comprar}>
                Comprar {cantidad}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};