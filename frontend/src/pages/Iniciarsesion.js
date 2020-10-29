import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/login1.png';
import '../styles/Iniciarsesion.css';



class Iniciarsesion extends Component {
    render () {
        return (
            <div>
                
                <main>
                    <section className="contenedor">
                        <div className="columna-uno">
                            <div className="COLUMNA">
                                <img className="Avatar" src={Logo} alt=""/>
                                <h2>
                                    Iniciar Sesion
                                </h2>
                                <from>
                                    <input type="text" placeholder="Correo"/>
                                    <input type="text" placeholder="Clave"/>
                                    <input type="submit" value="Ingresar"/>
                                    <div className="pregunta">
                                    <Link to="/registro">No me he registrado</Link>
                                    </div>
                                    <div className="pregunta">
                                    <Link to="/registro">Soy administrador/a.</Link>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );

    }
   
}
export default Iniciarsesion;