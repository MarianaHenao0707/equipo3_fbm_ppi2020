import React from 'react';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Principal from '../pages/Principal';
import Layout from '../components/Layout';
import Registro from '../components/Registro';
import Quienesomos from '../pages/Quienesomos';
import Informate from '../pages/Informate';
import Sugerencias from '../pages/Sugerencias';
import Preguntaco2 from '../pages/Preguntaco2';
import Preguntain2 from '../pages/Preguntain2';
import Incorrecta1 from '../pages/Incorrecta1';
import Correcta1 from '../pages/Correcta1';
import Preguntase1 from '../pages/Preguntase1';
import Administrador from '../pages/Administrador';
import menuadmin from '../pages/menuadmin';
import elimensajes from '../pages/elimensajes';
import Definicion from '../pages/Definicion';
import Clasificacion from '../pages/Clasificacion';
import Tipos from '../pages/Tipos';
import Consecuencias from '../pages/Consecuencias';
import Objetivos from '../pages/Objetivos';
import Informacion from '../pages/Informacion';
import Manejo from '../pages/Manejo';
import Separacion from '../pages/Separacion';
import Envioquejas from '../pages/Envioquejas';
import Ayuda from '../pages/Ayuda';
import Quienesadmin from '../pages/Quienesadmin';




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
        <Route exact path="/Consecuencias" component={Consecuencias} />
        <Route exact path="/Objetivos" component={Objetivos} />
        <Route exact path="/Informacion" component={Informacion} />
        <Route exact path="/Manejo" component={Manejo} />
        <Route exact path="/Separacion" component={Separacion} />
        <Route exact path="/Envioquejas" component={Envioquejas} />
        <Route exact path="/Ayuda" component={Ayuda} />
        <Route exact path="/Quienesadmin" component={Quienesadmin} />


        
        <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/principal" component={Principal} />
        <Route path="/quienesomos">
          <Quienesomos/>
        </Route>
        <Route path="/informate">
          <Informate/>
        </Route>
        <Route path="/sugerencias">
          <Sugerencias/>  
        </Route>
        <Route path="/Preguntase1">
          <Preguntase1/>
          </Route>
          <Route path="/Incorrecta1">
          <Incorrecta1/>
          </Route>
          <Route path="/Correcta1">
          <Correcta1/>
          </Route>
        
          <Route path="/Preguntaco2">
          <Preguntaco2/>
          </Route>
          <Route path="/Preguntain2">
          <Preguntain2/>
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
        <Route path="/Consecuencias">
          <Consecuencias/>  
        </Route>
        <Route path="/Objetivos">
          <Objetivos/>  
        </Route>
        <Route path="/Informacion">
          <Informacion/>  
        </Route>
        <Route path="/Ayuda">
          <Ayuda/>  
        </Route>
        <Route path="/Quienesadmin">
          <Quienesadmin/>  
        </Route>
        

       
        
        
       
        <Route path="/botonSugerencias" component={Sugerencias} />
        <Route path="/botonBuscar" component={Informacion} />
        <Route path="/botonInformate" component={Informate} />
        <Route path="/botonQuienesomos" component={Quienesomos} />
        <Route path="/botonnotas" component={Preguntase1} />
        <Route path="/botonAdministrador" component={Administrador} />
        <Route path="/volver" component={elimensajes} />
        <Route path="/elimensajes" component={elimensajes} />
        <Route path="/menuadmin" component={menuadmin} />
        <Route path="/Definicion" component={Definicion} />
        <Route path="/Consecuencias" component={Consecuencias} />
        <Route path="/Tipos" component={Tipos} />
        <Route path="/Objetivos" component={Objetivos} />
        <Route path="/Informacion" component={Informacion} />
        <Route path="/Ayuda" component={Ayuda} />
        <Route path="/botonQuienesadmin" component={Quienesadmin} />
        
        
        
        
        

        
        
        </Layout>
        

        </Switch>
      </BrowserRouter>
    )
}

export default App;