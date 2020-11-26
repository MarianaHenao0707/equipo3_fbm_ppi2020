import React from 'react';
import '../styles/login.css';
import { Link } from 'react-router-dom';


function Informacion () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Información sobre los residuos</h1>

            </section>
          </section>

        
    <Link to="/Definicion" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Definición </button>
    </Link>
         
    <Link to="/Clasificacion" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Clasificación de residuos </button>
    </Link>

    <Link to="/Tipos" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Tipos de residuos </button>
    </Link>

    <Link to="/Consecuencias" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Consecuencias y problemáticas</button>
    </Link>

    <Link to="/Objetivos" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Objetivos en el Reciclaje de Residuos</button>
    </Link>

    <Link to="/Manejo" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Manejo y tratamiento de residuos</button>
    </Link>

    <Link to="/Separacion" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">Manera correcta de separar residuos</button>
    </Link>
  
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Informacion;