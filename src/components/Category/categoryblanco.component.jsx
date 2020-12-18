//imports
import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Productos } from "../../Firebase/productos.js";
import { GenericSerializer } from "../../Firebase/generic.serializer";
import { ItemDetail } from "../ItemDetail/itemdetail.component";
import { Loading } from "../Loading/loading.component";
import { getFirebase, getFirestore } from '../../Firebase';
import { Item } from "../Items/item.component"


export const CategoryBlanco = () => {
 
  const [products, setProducts] = useState();
  const { type } = useParams();

const category = "Blanco"

  useEffect(() =>{
     const db = getFirestore();
     const productCollection = db.collection("productos-ecommerce-react");
     const filterByCategory = productCollection.where("type", "==", category);
     filterByCategory.get().then((response) => {
         const aux = response.docs.map(element => {
             return element.data();
         })
         setProducts(aux);
     });
 }, []);

//Verifico que lleguen los productos por categoria
//console.log(products)


  //imprime Lista de Items con Loading
  if (products) {
    return (
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 m-1 p-1">
          {products.map((item, indice) => {
            return <Item item={item} key={indice} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
