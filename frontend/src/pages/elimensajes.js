import React from 'react';
import  '../styles/elimensajes.css';
import { Link } from 'react-router-dom';


function elimensajes () {
    return(
        <div>
      <section className="Eliminar">
      
            <h1>Editar quejas</h1>
            <div className="col-sm-12">
            <div className="table-responsive">
            
            <table className="table table-hover table-condensed table-bordered">
              <thead className="table table-primary">
              <tr >
              <th>Quejas</th>
              
              <th></th>
              </tr>
              
              </thead>
              <tbody>
            <tr>
                <td>Una señora flaca de la esquina de mi casa saca la basura los días que no son, la dirección cll 108#68a104.</td>
              <button ><Link to="/Eliminado">Eliminar</Link></button>
              </tr>
              
             
               
              

            </tbody>
            </table>
           </div>
           </div>
          </section>
<button ><Link to="/menuadmin">volver</Link></button>
    </div>
    );
}

export default elimensajes;