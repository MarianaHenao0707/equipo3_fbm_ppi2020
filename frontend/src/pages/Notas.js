import React from 'react';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing';
import notas from '../styles/notas.css';
import Logo from '../images/impag.png';


function Notas () {
  return (
  <div>
    <section className="notas">
    
          <h1>Preguntas evaluativas</h1>
          <h2>MARTES</h2>
          <h3>Selecciona la respuesta correcta:</h3>
          <div className="col-sm-12">
          <div className="table-responsive">
          
          <table className="table table-hover table-condensed table-bordered">
            <thead className="table table-primary">
            <tr >
            <th>¿Qué residuos van en el contenedor verde?</th> 
            </tr>
            </thead>

            <tbody>
          <tr>
              <td>A)  Vidrio.</td>  
            </tr>
            <tr>
              <td>B)  Cartón.</td>      
            </tr>
            <tr>
              <td>C)  Papel.</td>  
            </tr>
            <tr>
              <td>D)  Plástico.</td>  
            </tr>

            <table className="table table-hover table-condensed table-bordered">
            <thead className="table table-primary">
            <tr >
            <th>¿Qué días pasa el camión de la basura en la comuna 5 de la ciudad de Medellín?</th> 
            </tr>
            </thead>

            <tbody>
          <tr>
              <td>A)  Lunes, Miércoles y Domingo.</td>  
            </tr>
            <tr>
              <td>B)  Martes, Jueves y Domingo.</td>      
            </tr>
            <tr>
              <td>C)  Lunes, Jueves y Domingo.</td>  
            </tr>
            <tr>
              <td>D)  Martes, Viernes y Domingo.</td>  
            </tr>
          </tbody>
          </table>
          </tbody>
          </table>
         </div>
         </div>
        </section>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
        <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Enviar</a>
  </div>
  );
}

export default Notas;