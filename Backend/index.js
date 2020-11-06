const express= require('express');
const app = express();


// definir todos los componentes, modulos app

const usuarios= require('./routes/usuarios');/*
const routes= require('./routes/inicioadmi'); /
const routes= require('./routes/iniciousuario');
const routes= require('./routes/puntaje');
const routes= require('./routes/quejas');
const routes= require('./routes/registroadmi');
const routes= require('./routes/registrousuario');*/



//ajustes
app.set('port',3000)



// Middleware
app.use(express.json());


// ajustess
app.use('/api',usuarios);
/*

app.use('/api',inicioadmi);
app.use('/api',iniciousuario);
app.use('/api',puntaje);
app.use('/api',quejas);
app.use('/api',registroadmi);
app.use('/api',registrousuario);*/



app.listen(app.get('port'),()=>{
    console.log(`Servidor corriendo en puerto  ${app.get('port')}`)
})