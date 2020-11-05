import React, { Component } from 'react';
import Logo from '../images/administrador.png';
import '../styles/Administrador.css';
import { Link } from 'react-router-dom';


class Administrador extends Component {
    
    render() { 
        return (

   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col -1">
    <img className="mb-4" src={Logo} alt="" width="150" height="150"/>
    <h1 className="h1 mb-5 font-weight-normal text-center text-primary">Administrador</h1>
    <label for="inputEmail" className="sr-only">Correo electrónico</label>
    <input type="password" id="inputname" className="form-control mb-3 " placeholder="Correo electrónico" required=""/>
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputlastname" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    </div>
    <Link to="/menuadmin" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Ingresar</button>
    </Link>
    </form>
    
  </div>
          );
    }
}

export default Administrador;