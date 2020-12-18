//Imports
import React,{ useState } from "react";
import "./item-count.component.css";



//Componente
export const ItemCount = ({initial, min, max, onAdd}) => {

  //Hooks
  const [contador, setContador] = useState(initial);


  //Sumar
  const sumar = () => {
    if (contador < max) {
      setContador(contador + 1);
      onAdd(contador + 1);
    }
  };


  //Restar
  const restar = () => {
    if (contador > min) {
      setContador(contador - 1);
      onAdd(contador - 1);
    }
  };



  //imprimo Contador
  return (
    <div className="item-count">
      <div className="item-count-window">
        <div className="item-count-counter-container">
          <button onClick={restar}> - </button>
          <span className="item-count-counter">{contador}</span>
          <button onClick={sumar}> + </button>
        </div>
      </div>
    </div>
  );
};
