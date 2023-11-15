import express  from 'express';
import conexion from './config/database.js';
import router from './routes/rutas.js';


import cors from 'cors'; // Importa el paquete cors




const app = express();



async function iniciarServidor(){

    /* Gestion de errores en la conexion con la BD*/
    try{
        await conexion.sync({force:false}) /*Verificar que la base esta conectada*/
    }catch(error){
        console.log("Error en la conxión BD:",error.message)
        return; // Va a detener la ejecución de la función
    }

      // Configuración del middleware CORS
  app.use(cors());


    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(router)
    app.listen(3000)
    console.log("servidor en el puerto 3000")
}
iniciarServidor()



