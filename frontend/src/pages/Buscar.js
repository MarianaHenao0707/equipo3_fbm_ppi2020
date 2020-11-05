import React from 'react';
import pricing from '../components/Pricing';
import cardpricing from '../components/CardPricing';
import buscar from '../styles/Buscar.css';





function Buscar (){
    return (
        <div>
<section className="Buscar">
          
<section >
          <section className="Buscar">
              
              <h1>Información sobre los residuos</h1>
            </section>

          </section>

          <from className="Buscar">
          <input type="submit"value="¿Qué son?"/>
          </from>

          <from className="Buscar">
          <input type="submit"value="¿Cómo se deben separar?"/>
          </from>

          <from className="Buscar">
          <input type="submit"value="Consecuencias"/>
          </from>

          <from className="Buscar">
          <input type="submit"value="Solución a problemas"/>
          </from>

          <from className="Buscar">
          <input type="submit"value="Avisos"/>
          </from>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
    </div>

    );
    
}
export default Buscar;