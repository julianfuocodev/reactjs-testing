//imports
import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/loading.component"
import "./adminitem.component.css";



//componente
export const AdminItem = (props) => {

    //paso por propos el items seleccionado 
    const { item } = props;

var pedido = item.pedido


    //imprimo card de items
    if (item.length != 0) {
    return (
        <div className="cart-item-container">
            <div className="cart-item-description">
                <div>
                    <span>Id de la compra : {item.id}</span>
                </div>
                <div>
                    <span>Total Pagado : {item.total}</span>
                </div>
            </div>
        </div>
    );
} else {
    return <Loading />;
  }
};

