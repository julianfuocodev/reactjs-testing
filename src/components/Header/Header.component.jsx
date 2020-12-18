//imports 
import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../CartIcon/CartIcon.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { SideBar } from "../SideBar/sidebar.component"
import "./header.component.css"


//components
export const Header = () => {


  //imprime NavBar
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">

        {/*---Nombre de la marca---*/}
        <Link to="/">
          <h1 className="text-white logo">By-nos</h1>
        </Link>

        {/*---Carrito---*/}
        <Link to="/carrito">
          <CartIcon />
        </Link>
        <Link to="/categoria/Malbec">
          <h1>M</h1>
        </Link>
        <Link to="/categoria/Blanco">
          <h1>C</h1>
        </Link>
        <Link to="/categoria/Cabernet">
          <h1>B</h1>
        </Link>
        <Link to="/admin">
          <h1>A</h1>
        </Link>
        {/*---Menu desplegable---*/}
        <div className="row">
          <h4 className="m-1 mr-3 text-white">Categorias</h4>
          <FontAwesomeIcon icon={faGlassCheers} className="h1 text-white" />
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">

        </div>
      </nav>
      <SideBar />
    </div>
  );
};
