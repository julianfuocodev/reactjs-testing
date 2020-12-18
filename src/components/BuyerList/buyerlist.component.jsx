//imports
import React,{ useState, useEffect } from "react";
import { Productos } from "../../Firebase/productos.js";
import { GenericSerializer } from "../../Firebase/generic.serializer";
import { AdminItem } from "../AdminItem/adminitem.component";
import { Loading } from "../Loading/loading.component";
import "./admin-list.component.css";



//componentes
export const AdminList = () => {

  //Hooks
  const [itemList, setItemList] = useState([]);

  //useEffect
  useEffect(() => {
    Productos.getAllProducts().then((response) => {
      const productos = GenericSerializer.serializeAll(response);
      setItemList(productos);
    });
  }, []);



  //imprime Lista de Items con Loading
  if (itemList.length) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 m-1 p-1">
          {itemList.map((item, indice) => {
            return <AdminItem item={item} key={indice} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
};