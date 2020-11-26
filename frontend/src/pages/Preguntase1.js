import React from 'react';
import '../styles/notas.css';
import { Link } from 'react-router-dom';


function Preguntase1 () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Preguntas evaluativas 1</h1>
              <h2>¿Qué tipo de residuos se depositan en la caneca azul? </h2>
            </section>
          </section>

        
    <Link to="/Retroalimentacion1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">A) Carbón, mantequilla, icopor, chicles </button>
    </Link>
         
    <Link to="/Retroalimentacion2" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">B) Vasos desechables, bolsas plásticas✅ </button>
    </Link>

    <Link to="/Retroalimentacion1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">C) Hojas secas, poda de árboles y plantas </button>
    </Link>

    <Link to="/Retroalimentacion1" className="text-decoration-none">
    <button className="btn btn-lg btn-primary btn-flex mb-3 col-7" type="submit">D) Gasas, algodones, residuos tóxicos </button>
    </Link>
  
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Preguntase1;