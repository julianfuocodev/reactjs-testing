//imports
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CustomerForm } from "../CustomerForm/customerform.component";
import { CartContext } from "../../Context/cartcontext.component";
import { Ventas } from "../../Firebase/ventas";
import { Loading } from "../Loading/loading.component";
import "./checkout.component.css";


//Componente
export const Checkout = () => {

//Hooks
  const contexto = useContext(CartContext);
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [idPedido, setIdPedido] = useState("");
  const [mensaje, setMensaje] = useState("");

    //Effects
  useEffect(() => {
    if (contexto.cantidadItemsPedido === 0) {
      history.push("/");
    }
  }, []);


    //Funciones
  const generarCheckout = (cliente) => {
    debugger;
    const pedidoFinal = {
      cliente,
      total: contexto.montoTotalPedido,
      pedido: contexto.pedido,
      fecha: new Date(),
    };
    setLoading(true);
    Ventas.crearPedido(pedidoFinal)
      .then((response) => {
        debugger;
        setMensaje("Compra realizada exitosamente!");
        setIdPedido(response.id);
        setStep(2);
        contexto.limpiarPedido();
      })
      .catch((error) => {
        debugger;
        setMensaje(
          "Ocurrió un error procesando su pedido, intente nuevamente mas tarde"
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };


  //Imprime
  if (loading) {
    return <Loading />;
  }
  if (step === 1) {
    return (
      <div>
        <CustomerForm onSuccess={generarCheckout} />
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <h1 className="checkout-title">{mensaje}</h1>
        {idPedido === "" ? (
          ""
        ) : (
          <div className="checkout-pedido">
            Codigo de Pedido:{" "}
            <span className="checkout-codigo">{idPedido}</span>
          </div>
        )}
      </div>
    );
  }
};
