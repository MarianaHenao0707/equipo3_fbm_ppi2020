import React from 'react';
import Header from './Header';
import Footer from  './Footer';
import '../styles/Pricing.css';


/*{
  name:'Buscar',
  url:'/Buscar'
 
},
{
  name:'Fallas',
 url:'/Fallas'
},
{
  name:'Informate',
  url:'/Informate'
},
{
  name:'Sugerencias',
  url:'/Sugerencias'

},
{
 name:'Notas',
 url:'/Notas'
 
}*/

const Layout = (props) => {
    return(
        <>
        <Header 
          companyName="Eduquémonos sobre los residuos"
          navBar={[
          
          ]}
     
          infoButton = "Ingresar"
        />


        {props.children}

        <Footer />
        </>
    )
}


export default Layout;