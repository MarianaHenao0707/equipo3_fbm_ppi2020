import React from 'react';
import "../styles/buscar.css"
import { Link } from 'react-router-dom';




function Buscar (){
    return (
        <div>
<section className="Buscar">
          
<section >
          <section className="Buscar">
              
              <h1>Información sobre los residuos</h1>
            </section>

          </section>

          <from className="Buscar1">
          <button ><Link to="/Definicion">Definicion</Link></button>
          </from>

          <from className="Buscar2">
          <button ><Link to="/Clasificacion">Clasificación de los residuos</Link></button>
          </from>

          <from className="Buscar3">
          <button ><Link to="/Tipos">Tipos de residuos</Link></button>
          </from>

          <from className="Buscar4">
          <button ><Link to="/Principal">Consecuencias</Link></button>
          </from>

          <from className="Buscar5">
          <button ><Link to="/Principal">Objetivos en el reciclaje de los residuos</Link></button>
          </from>

          <from className="Buscar6">
          <button ><Link to="/Principal">Manejo y tratamiento de residuos</Link></button>
          </from>

          <from className="Buscar7">
          <button ><Link to="/Principal">Correcta separación de residuos</Link></button>
          </from>
        </section>
  <button ><Link to="/Principal">volver</Link></button>
    </div>

    );
    
}
export default Buscar;