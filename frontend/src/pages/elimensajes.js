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
                <td>Una señora flaca de la esquina de mi casa saca la basura los días que no son, los animales y motos/carros quen pasan por allí la riegan. La dirección es: cll19a#34-31b.</td>

                
            
              <button ><Link to="/Eliminado">Eliminar</Link></button>
              
              </tr>
              <tr>
                <td>Mi vecina Manuela no amarra bien la basura y la he visto tirando papeles de basuras al suelo, vive en el segundo piso, dirección: cll23#62-84.</td>

                
              
                <button ><Link to="/Eliminado2">Eliminar</Link></button>
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