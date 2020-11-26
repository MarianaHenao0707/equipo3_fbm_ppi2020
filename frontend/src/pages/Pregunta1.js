import React from 'react';
import '../styles/notas.css';
import { Link } from 'react-router-dom';


function Pregunta1 () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Preguntas evaluativas 2</h1>
              <h2>¿Cual es la caneca que se utiliza en laboratorios, consultorios y enfermerias?</h2>
            </section>
          </section>

        
    <Link to="/Retroalimentacion4" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">A) Roja✅ </button>
    </Link>
         
    <Link to="/Retroalimentacion3" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">B) Gris </button>
    </Link>

    <Link to="/Retroalimentacion3" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">C) Verde </button>
    </Link>

    <Link to="/Retroalimentacion3" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">D) Azul </button>
    </Link>
  
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Pregunta1;