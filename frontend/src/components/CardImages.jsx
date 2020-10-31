import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import buscar from '../images/informacion.png';
import sugerencias from '../images/quejas.png';
import fallas from '../images/ayuda.png';
import informate from '../images/quienesom.png';
import notas from '../images/preguntase.png';
class CardImages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
          

 <div className="album py-5 bg-light">
   <h1 className="h1 mb-5 font-weight-normal text-center text-primary">MENÚ</h1>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={buscar} alt="" width="150" height="150"/>
         
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonbuscar'> <button  type="button" className="btn btn-sm btn-outline-primary">Información sobre los residuos</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={sugerencias} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonSugerencias'><button type="button" className="btn btn-sm btn-outline-primary">Quejas</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={informate} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonInformate'><button type="button" className="btn btn-sm btn-outline-primary">Ayuda</button></Link>
                  
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={fallas} alt="" width="150" height="150"/>
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonFallas'> <button type="button" className="btn btn-sm btn-outline-primary">Quiénes somos</button></Link>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={notas} alt="" width="150" height="150"/>
            
            <div className="card-body">
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonnotas'><button type="button" className="btn btn-sm btn-outline-primary">Preguntas evaluativas</button></Link>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        


        
      </div>
    </div>
    <a className="btn btn-outline-primary my 2 my-sm-0 form-control1 m-2" type="submit" href="javascript:history.back()">Volver</a>
  </div>
         );
    }
}
 
export default CardImages;