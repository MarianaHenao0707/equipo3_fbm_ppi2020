import React from 'react';
import  '../styles/elimensajes.css';
import { Link } from 'react-router-dom';


function Eliminado2 () {
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
                <td>Mi vecina Manuela no amarra bien la basura y la he visto tirando papeles de basuras al suelo, vive en el segundo piso, dirección: cll23#62-84.</td>
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

export default Eliminado2;