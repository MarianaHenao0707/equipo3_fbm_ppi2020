import React from 'react';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing';
import notas from '../styles/notas.css';
import Logo from '../images/impag.png';


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
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>
  );
}

export default Notas;