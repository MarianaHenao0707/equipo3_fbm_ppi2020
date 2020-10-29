import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Inicioadmi.css';

class Inicioadmi extends Component{
    render (){
        return(
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
                        </div>
                        <div className="pregunta">
                        <Link to="/admi">Soy administrador/a</Link>
                        </div>
                    </from>
                </div>
            </div>
        </section>
    </main>
</div>
        )
    }
}
    
export default Inicioadmi;s