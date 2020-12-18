//imports
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.component";
import { Home } from "./containers/HomeContainer/home.container";
import { ItemDetailContainer } from "./containers/ItemDetailContainer/item-detail.containter";
import { Cart } from "./components/Cart/cart.component";
import { CartProvider } from "./Context/cartcontext.component";
import { Footer } from "./components/Footer/footer.component.jsx"
import { CategoryMalbec } from "./components/Category/categorymalbec.component";
import { CategoryBlanco } from "./components/Category/categoryblanco.component";
import { CategoryCabernet } from "./components/Category/categorycabernet.componen";
import { AdminList } from "./components/AdminList/adminlist.component";
import { Checkout } from "./components/Checkout/checkout.component"



//Componente
const App = () => {

  return (


    //router + context
    <CartProvider>
      <BrowserRouter>

        {/*Head*/}
        <Header />

        {/*Body*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/producto/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/categoria/Malbec">
            <CategoryMalbec />
          </Route>
          <Route path="/categoria/Blanco">
            <CategoryBlanco />
          </Route>
          <Route path="/categoria/Cabernet">
            <CategoryCabernet />
          </Route>
          <Route path="/carrito">
            <Cart />
          </Route>
          <Route path="/admin">
            <AdminList />
          </Route>
          <Route path="/verificar">
            <Checkout />
          </Route>
        </Switch>

        {/*Footer*/}
        <Footer />

      </BrowserRouter >
    </CartProvider >
  );
};

export default App;
