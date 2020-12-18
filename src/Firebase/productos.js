//Import
import { getFirestore } from "./index";

//Tomo los productos de mi firebase
const dataBase = getFirestore();
const itemCollection = dataBase.collection("productos-ecommerce-react");

//Tomo los productos de mi buyer
const itemBuyer = dataBase.collection("Ventas");

//Tomo todos los productos de mi buyer
const buyerProducts = () => {
  return itemBuyer.get();
};


//Tomo todos los productos
const getAllProducts = () => {
  return itemCollection.get();
};


//Tomo Productos por ID
const getProduct = (id) => {
  const item = itemCollection.doc(id);
  return item.get();
};

console.log(getProduct)

//Tomo Productos por Categoria Malbec
const malbec = itemCollection.where("type", "==" , "malbec").limit(20);

//Tomo Productos por Categoria Blanco
//const blanco = itemCollection.where("type", "==" , blanco).limit(20);

//Exporto todos los componentes
export const Productos = {
  buyerProducts,
  getAllProducts,
  getProduct,
  malbec
};



//const idItem = itemCollection.doc("aca va el id del items de firebase");
//const altoPrecio = itemCollection.where("price", ">" , 500);
//const category = itemCollection.where("type", "==" , malbec).limit(20);