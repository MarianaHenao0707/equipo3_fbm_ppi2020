const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');


router.get('/usuarios',(req,res)=>{
mysqlConnection.query('SELECT * from tblusuario',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin

router.post('/nuevo-usuario',(req,res)=>{
const {nombres,correo,contraseña}=req.body;

let usuario =[nombres,correo,contraseña];

let nuevousuario =`INSERT INTO tblusuario(nombres,correo, contraseña)
VALUES(?,?,?,?,?,?,?)`;
mysqlConnection.query(nuevousuario,usuario,(err,results,fields)=>{
if(err){
   return console.error(err.message);
}else{
   res.json({message:`usuario registrado `})
}
})});
router.put('/usuario/:id',(req,res)=>{
   const {nombre,contraseña,perfil}=req.body;
   const {id} =req.params;
   
   
   mysqlConnection.query(`UPDATE tblusuario SET nombre=?,contraseña=?,perfil=? where id=?,`
   [nombre,contraseña,perfil,id],(err,rows,fields)=>{
   if(!err){
      
      res.json({status:`usuario`});
   }else{
      console.log(err);
   }
   })});

   router.get('/usuario/:id',(req,res)=>{
      const {id} =req.params;
      mysqlConnection.query('SELECT * from tblusuario where id= '+id,(err,rows,fiels)=>{
      if(!err){
         res.json(rows); 
      }else{
      console.log(err);
      }});
      })// fin

module.exports=router;