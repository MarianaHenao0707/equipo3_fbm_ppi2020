import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eliminarmens from '../images/eliminarsmj.png';
import fallas from '../images/ayuda.png';
import informate from '../images/quienesom.png';



class CardImages2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<>
<volver/>
 <div className="album py-5 bg-light">
   <h1 className="h1 mb-5 font-weight-normal text-center text-primary">MENÚ ADMINISTRADOR/A</h1>
    <div className="container">
      <div className="row">

      <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={eliminarmens} alt="Responsive image" width="150" height="150"/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="btn-group">
                <Link to='/elimensajes'><button type="button" className="btn btn-sm btn-outline-primary">Ver quejas</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img className="mb-4" src={fallas} alt="Responsive image" width="150" height="150"/>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <Link to='/botonQuienesadmin'> <button type="button" className="btn btn-sm btn-outline-primary">Quiénes somos</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  
  </div>
         </>);
    }
}
 
export default CardImages2;