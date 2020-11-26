import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/Consecuencias.css';
import Consecu from '../images/Consecu.jpg';





function Consecuencias() {
    return (
        
          <section className="Consecuencias">
          <h1>Consecuencias y problematica</h1>
        

              <section className="seccion-uno">
              <div className="table-uno">
<h2> La creciente generación de residuos derivados de la actividad humana constituye un grave problema social y ambiental que se ha convertido en una cuestión de suma importancia hacia la que se están dirigiendo políticas de intervención, información y gestión.
La generación de residuos puede provocar los siguientes impactos negativos, referidos no solo al ámbito ambiental, sino también al económico, sanitario y social. </h2>
<h3>Problemática ambiental</h3>
<h4>Sobreexplotación de recursos naturales; ocupación del espacio; deterioro del paisaje; contaminación del suelo, agua y aire;
mayor riesgo de incendios; olores; alteración en los ciclos de vida de especies animales; enfermedades o muerte en seres vivos;
bioacumulación de sustancias en especies que pasan a la cadena trófica y llegan hasta nosotros;
aumento de las emisiones de gases de efecto invernadero y potenciación del cambio climático.</h4>

<h5>Problemática económica</h5>
<h6>Alta inversión en la gestión de los residuos y su mantenimiento; costes asociados a descontaminación y restauración de espacios;
despilfarro de posibles materias primas no utilizadas; pérdida de valor económico del suelo.</h6>
</div>

         <div className="table-uno">
             <h7>Problemática social</h7>
             </div>

         <div className="table-uno">
         <h8>Deterioro del entorno; “Compra-venta” de residuos que convierten las regiones más pobres en vertederos;
            problemática sanitaria; proliferación de animales transmisores de enfermedades en los lugares de acumulación de residuos;
            contaminación bacteriana.</h8>
            </div>

         <div className="table-uno">
             <h9>Además de estos problemas podemos mencionar los siguientes, que son más graves a largo plazo:</h9>
             </div>

            <div className="table-uno">
            <h10>Aumento de la contaminación: 
        Hay muchos tipos diferentes de contaminación que van desde la espuma de poliestireno que transporta el océano y las
        botellas de agua que conviven con la fauna marina, hasta químicos corrosivos que se derraman en el suelo y lo dejan 
        inerte. El aire también se contamina cada vez que los coches emiten dióxido de carbono, cada vez que se queman 
        sustancias tóxicas, o que una empresa libera gases químicos.</h10>
            </div>


            <div className="table-uno">
            <h11>Acumulación de basura: 
        las personas producen más de 260 millones de toneladas de desechos sólidos. De esta cantidad, 88 millones de toneladas
         representaban materiales reciclables que fueron reutilizados; alrededor de 40 millones de toneladas se sometieron a 
         combustión, para convertirlos en energía utilizable para combustible, calor y electricidad. Y un poco más de la mitad,
          o 132 millones de toneladas, fueron a vertederos. Sin el reciclaje y la combustión, los 260 millones de toneladas 
          habrían llenado los vertederos y comenzado a acumularse.</h11>
          </div>

        <div className="table-uno">
            <h12>Incremento de los gases de efecto invernadero:
        La tierra ha sufrido múltiples cambios climáticos desde su creación, todos ellos parte de sus procesos naturales y su larga 
        evolución. Pero desde la revolución industrial esto se ha desbordado. Hoy en día, nosotros somos los principales 
        contribuyentes al calentamiento del planeta, principalmente por los conocidos gases de efecto invernadero
         (metano y dióxido de carbono) que se desprenden de industrias, escapes de automóviles, consumo de electricidad, entre otros.</h12>
         </div>

        <div className="table-uno">
            <h13>Destrucción de hábitats naturales:
        Cuando no reciclamos, reutilizamos o reducimos el consumo, estamos destruyendo los hábitats naturales de nuestro planeta. Tal como está, 
        nuestra tierra no puede hacer frente por sí sola a la tasa actual de contaminación y destrucción de entornos y recursos naturales, por 
        lo que en unos años podría quedar totalmente devastada y arruinada.</h13>
        </div>

        <div className="table-uno">
            <h14>Deforestación total:
         Si dejamos de reciclar los papeles, la demanda no disminuirá. Continuaremos usándolo, pero habrá mucho menos y eso causará una deforestación
         aun mayor que la que se ha hecho hasta este momento debido a la demanda de más madera para su producción. Esto destruirá bosques enteros y 
         ciertas regiones quedarán desprotegidas, y millones de especies de vida silvestre perderán sus habitats en áreas con muy poco o ningún árbol alrededor.</h14>
         </div>

        <div className="table-uno">
            <h15>Nuevas producciones:
        El hecho de tener que crear nuevos productos desde cero, no solo agota al medio ambiente de sus recursos, sino que también puede ser económicamente costoso. 
        Por ejemplo, hacer botellas de agua nuevas requiere una cantidad masiva de aceite cada año y, por lo tanto, genera más desperdicios y contaminación química.</h15>
        </div>

        <div className="table-uno">
            <h16>Contaminación de los océanos:
        Para alguna de nuestras ciudades costeras, muchos de nuestros desechos terminan en el océano y mares, y esto incluye una gran cantidad de materiales que pudieron 
        haber sido reciclados. De hecho, una de las principales preocupaciones sobre los desechos es la cantidad de plástico que termina en el mar. Este material puede 
        durar cientos de años en el agua y se convierte en un peligro importante para la vida de los animales oceánicos, como tortugas marinas o peces. Pueden morir por
         inhalar pequeños trozos de plástico o por quedarse atrapados en trozos largos de plástico sueltos.</h16>
         </div>

        <div className="table-uno">
            <h17>Mayores producciones: 
        Hoy en día, las producciones crecen más rápido de lo que el material puede descomponerse. Hay que tener en cuenta que la mayoría de los materiales reciclables no se 
        descomponen fácilmente. Los plásticos y metales pueden durar de cientos a miles de años, ¡en realidad una botella de plástico necesita por lo menos 450 años para
        descomponerse totalmente!. Por lo tanto, debemos empezar a comprender por qué el reciclaje es tan importante para salvar al planeta y a todos los que vivimos en él.</h17>
        



 <section className="img">
           <img className="img" src={Consecu} alt="Responsive image"/> 
           </section>
                  <button ><Link to="/Informacion">volver</Link></button>
                  </div>
        </section>
        </section>
        
             );
    
            }
export default Consecuencias;