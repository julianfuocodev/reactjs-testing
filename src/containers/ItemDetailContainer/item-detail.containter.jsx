//imports
import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../../Firebase/productos.js";
import { GenericSerializer } from "../../Firebase/generic.serializer";
import { ItemDetail } from "../../components/ItemDetail/itemdetail.component";
import { Loading } from "../../components/Loading/loading.component";



//componente
export const ItemDetailContainer = () => {

  //Hooks
  const { id } = useParams();
  const [item, setItem] = useState({});


  //useEffect
  useEffect(() => {
    Productos.getProduct(id).then((response) => {
      const item = GenericSerializer.serialize(response);
      setItem(item);
    });
  }, [id]);

  console.log(item)

  //imprimo Items seleccionado por Id con Loading
  if (item.id) {
    return <ItemDetail item={item} />;
  } else {
    return <Loading />;
  }
};