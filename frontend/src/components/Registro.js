import React, { Component } from 'react';
import Logo from '../images/registro.png';
import '../styles/registro.css';
import { Link } from 'react-router-dom';


class Registro1 extends Component {
    
    render() { 
        return (
   <div className="container align-items-center mt-5 text-center">
    <form className="form-signin text-center align-items-center col -1">
    <img className="mb-4" src={Logo} alt="" width="150" height="150"/>
    <h1 className="h1 mb-5 font-weight-normal text-center text-primary">REGISTRO</h1>
    <input type="users" id="inputusers" className="form-control mb-3 " placeholder="Usuario" required=""/>
    
    <label for="inputPassword" className="sr-only">Contraseña</label>
    <input type="password" id="inputPassword" className="form-control mb-3 " placeholder="Contraseña" required=""/>
    <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Recordar
    </label>
    </div>
    <Link to="/principal" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-6" type="submit">Registrarse</button>
    </Link>
    <p className="mt-5 mb-3 text-muted">© 2017-2020</p>
    </form>
  </div>
          );
    }
}

export default Registro1;