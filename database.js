import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const init = () => {
var con = mysql.createConnection({
     host: process.env.HOST__,
     user: process.env.USER__,
     password: process.env.DB_PASSWORD__,
     port: process.env.PORT__,
     database: process.env.DB_NAME__,
 });
 con.connect(function(err) {
      if (err) throw err;  
    //   console.log("Conectado!");
    //   con.query("select * from Cliente_Persona", (err, data) => {
    //       if (err) console.log(err);
    //       else console.log(data);
    //   });
 });
}

 export default init;