import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Layout from '../components/Layout';
import Registro from '../components/Registro';
import Buscar from '../pages/Buscar';
import Quienesomos from '../pages/Quienesomos';
import Informate from '../pages/Informate';
import Sugerencias from '../pages/Sugerencias';
import Notas from '../pages/Notas';
import Administrador from '../pages/Administrador';
import menuadmin from '../pages/menuadmin';
import Bloquear from '../pages/Bloquear';
import elimensajes from '../pages/elimensajes';
import Definicion from '../pages/Definicion';
import Clasificacion from '../pages/Clasificacion';
import Tipos from '../pages/Tipos';




const App = () =>{
    return(
      <BrowserRouter>
      
        <Switch>
        <Route exact path="/iniciosesion" component={Register} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/Administrador" component={Administrador} />
        <Route exact path="/Definicion" component={Definicion} />
        <Route exact path="/Clasificacion" component={Clasificacion} />
        <Route exact path="/Tipos" component={Tipos} />


        
        <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/principal" component={Principal} />
         <Route path="/buscar">
          <Buscar/>
        </Route>
        <Route path="/quienesomos">
          <Quienesomos/>
        </Route>
        <Route path="/informate">
          <Informate/>
        </Route>
        <Route path="/sugerencias">
          <Sugerencias/>  
        </Route>
        <Route path="/notas">
          <Notas/>  
          <Route path="/Buscar">
          <Buscar/>  
        </Route>
        <Route path="/Buscar1">
          <Buscar/>  
        </Route>
        <Route path="/Buscar2">
          <Buscar/>  
        </Route>
        <Route path="/Buscar3">
          <Buscar/>  
        <Route path="/Buscar4">
          <Buscar/>  
        </Route>

        <Route path="/Notas">
          <Buscar/>  
        </Route>
        <Route path="/Notas">
          <Buscar/>  
        </Route>
        <Route path="/Notas">
          <Buscar/>  
        </Route>  
          <Route path="/Notas">
          <Buscar/>  
        </Route>
        <Route path="/Definicion">
          <Definicion/>  
        </Route>
        <Route path="/Clasificacion">
          <Clasificacion/>  
        </Route>
        <Route path="/Tipos">
          <Tipos/>  
        </Route>

        </Route>
        </Route>
        
        <Route path="/botonbuscar" component={Buscar} />
        <Route path="/botonSugerencias" component={Sugerencias} />
        <Route path="/botonInformate" component={Informate} />
        <Route path="/botonQuienesomos" component={Quienesomos} />
        <Route path="/botonnotas" component={Notas} />
        <Route path="/botonAdministrador" component={Administrador} />
        <Route path="/volver" component={elimensajes} />

        <Route path="/Bloquear" component={Bloquear} />
        <Route path="/elimensajes" component={elimensajes} />
        <Route path="/menuadmin" component={menuadmin} />
        <Route path="/Definicion" component={Definicion} />

        
        
        
        

        
        
        </Layout>
        

        </Switch>
      </BrowserRouter>
    )
}

export default App;