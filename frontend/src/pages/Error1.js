import React from 'react';
import '../styles/notas.css';
import { Link } from 'react-router-dom';


function Error1 () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Preguntas evaluativas 3</h1>
              <h2>¿En qué color de caneca va el icopor?</h2>
            </section>
          </section>

        
    <Link to="/Retroalimentacion5" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">A) Gris </button>
    </Link>
         
    <Link to="/Retroalimentacion5" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">B) Roja </button>
    </Link>

    <Link to="/Retroalimentacion5" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">C) Azul </button>
    </Link>

    <Link to="/Retroalimentacion6" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">D) Verde✅ </button>
    </Link>
  
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Error1;