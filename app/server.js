const express = require("express");
const app = express();
const {connection} = require("./database/db");
const ruta = require("./routes");

const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
//ruta
app.use(ruta);

app.listen(port, ()=>{
    console.log("servidor en el puerto: " + port);
    connection.sync({force: false}).then(() => {
        console.log("se estabecio la conexion con la db");
    });
});