const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
    // db creada https://console.clever-cloud.com/
host:"bpyhjzww1nn0vggyocnt-mysql.services.clever-cloud.com",
user:'uypxsluxe49fc5md',
password:'yl40T5Kc8VyDCFIaqcr7',
database:'bpyhjzww1nn0vggyocnt',
multipleStatements:true



});

mysqlConnection.connect(function(error){
    if(err){
       console.error(err);
return;
    }else{
       console.log('base de datos conectada');
    }

})
 module.exports = mysqlConnection;