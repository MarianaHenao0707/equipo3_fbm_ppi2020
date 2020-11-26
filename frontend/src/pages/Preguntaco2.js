import React from 'react';
import '../styles/notas.css';
import { Link } from 'react-router-dom';


function Preguntaco2 () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Preguntas evaluativas</h1>
              <h2>¿Cual es la caneca que se utiliza en laboratorios, consultorios y enfermerías?</h2>
            </section>
          </section>

        
    <Link to="/Incorrecta1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">A) Roja✅ </button>
    </Link>
         
    <Link to="/Correcta1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">B) Azul </button>
    </Link>

    <Link to="/Incorrecta1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">C) Verde </button>
    </Link>

    <Link to="/Incorrecta1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">D) Gris </button>
    </Link>
  
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Preguntaco2;