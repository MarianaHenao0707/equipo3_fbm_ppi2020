

module.exports = () => {
  const data = {
    "usuarios": [
      {
        "id_usuario":1,
        "nombre":"Juan Carlos Perez",
        "contraseña":"1234",
        "correo":"juanperez@elpoli.edu.co",
      }
    ],
    "quejas":  [
      {
        "id_queja":1,
        "id_usuario":1,
        "descipciòn":"Mi vecina manuela no amarra bien la basura la he visto tirando papeles de basura al suelo,vive en el segundo piso,direccion: cll 23 #62-84",
        
     
      }
    ],
      "informaciòn": [
        {
          "id_informaciòn":1,
          "id_usuario":1,
          "contenido":"Mi vecina manuela no amarra bien la basura la he visto tirando papeles de basura al suelo,vive en el segundo piso,direccion: cll 23 #62-84",
          
        }
   ],
    "preguntas_evaluativas": [
     {
       "id_evaluaciòn":1,
       "calificaciòn":"Alto",
       "id_usuario":"1",
       "contenido_evaluacion":"¿Cual es la caneca que se utiliza en laboratorios, consultorios y enfermerias? A. Roja B. Gris C. Verde D. Azul ¿Qué tipo de residuos se depositan en la caneca azul? A.Carbon-mantequilla-chicles B.Vasos desechables, bolsas plásticas C.Hojas secas, poda de árboles D. Gasas, algodones ¿En qué color de caneca va el icopor? A.Gris B.Roja C.Azul D. Verde ¿Que residuos encontramos en la caneca gris? A. Bolsas plásticas B. Pañuelos C.Carbón D. Papel roto" 
      }
    ], 
  };
  return data;
};

