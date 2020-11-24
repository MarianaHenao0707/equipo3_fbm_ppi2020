import React from 'react';
import '../styles/notas.css';
import { Link } from 'react-router-dom';


function Notas () {
  return (
  <div>
    <section className="notas">
    <section >
          <section className="Notas">
              
              <h1>Preguntas evaluativas</h1>
              <h2>¿Qué tipo de residuos se depositan en la caneca azul?</h2>
            </section>
          </section>

        

          <from className="Notas">
          <input type="submit"value="A) Carbón, mantequilla, icopor, chicles "/>
          <h3><Link to="/Principal">volver</Link></h3>
          </from>

          <from className="Notas">
          <input type="submit"value="B) Vasos desechables, bolsas plásticas✅"/>
          </from>

          <from className="Notas">
          <input type="submit"value="C) Hojas secas, poda de árboles y plantas"/>
          </from>

          <from className="Notas">
          <input type="submit"value="D) Gasas, algodones, residuos tóxicos"/>
          </from>
        </section>

<button ><Link to="/Principal">volver</Link></button>
    </div>
  );
}

export default Notas;