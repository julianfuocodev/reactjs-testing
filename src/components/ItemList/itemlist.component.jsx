//Imports
import React,{ useState, useEffect } from "react";
import { Productos } from "../../Firebase/productos.js";
import { GenericSerializer } from "../../Firebase/generic.serializer";
import { Item } from "../Items/item.component";
import { Loading } from "../Loading/loading.component";


//Componentes
export const ItemList = () => {

  //Hooks
  const [itemList, setItemList] = useState([]);

  //UseEffect
  useEffect(() => {
    Productos.getAllProducts().then((response) => {
      const productos = GenericSerializer.serializeAll(response);
      setItemList(productos);
    });
  }, []);


  //Imprime Lista de Items con Loading
  if (itemList.length) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 m-1 p-1">
          {itemList.map((item, indice) => {return <Item item={item} key={indice} />;})}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};