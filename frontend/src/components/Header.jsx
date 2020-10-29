import React from 'react';
import '../styles/Header.css';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <nav>
                <img src={Logo}  width="50" height="50" alt="" loading="lazy" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food">
                  
                </button>
                <ul>
                    <li><Link to="/sesion">INGRESAR</Link></li>
                </ul>
            </nav>
            <section className="Texto-header">
                <h1>EDUQUÉMONOS SOBRE LOS RESIDUOS</h1>
                <h2></h2>
            </section>
            
        </header> 
    );
}
export default Header;
