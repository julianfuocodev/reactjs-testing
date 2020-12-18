import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [pedido, setPedido] = useState([]);
  const [cantidadItemsPedido, setCantidadItemsPedido] = useState(0);
  const [montoTotalPedido, setMontoTotalPedido] = useState(0);

  const eliminarItem = (id) => {
    const newPedido = pedido;
    const indice = newPedido.findIndex((elemento) => {
      return elemento.item.id === id;
    });
    newPedido.splice(indice, 1);
    setPedido([...newPedido]);
    calcularTotales();
  };

  const agregarItem = (item, cantidad) => {
    const detalle = {
      item,
      cantidad,
    };
    const indiceYaExiste = pedido.findIndex((item) => {
      return item.item.id === detalle.item.id;
    });
    if (indiceYaExiste === -1) {
      pedido.push(detalle);
    } else {
      pedido[indiceYaExiste].cantidad += detalle.cantidad;
    }
    setPedido([...pedido]);
    calcularTotales();
  };

  const calcularTotales = () => {
    let cantidad = 0,
      total = 0;
    pedido.forEach((elemento) => {
      cantidad += elemento.cantidad;
      total += elemento.cantidad * elemento.item.price;
    });
    setCantidadItemsPedido(cantidad);
    setMontoTotalPedido(total);
  };

  const limpiarPedido = () => {
    setPedido([]);
    setCantidadItemsPedido(0);
    setMontoTotalPedido(0);
  };

  return (
    <CartContext.Provider
      value={{
        pedido,
        cantidadItemsPedido,
        montoTotalPedido,
        eliminarItem,
        agregarItem,
        limpiarPedido,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
