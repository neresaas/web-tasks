const express = require('express');

let app = express();
let port = 8081;
// Para colocar variables de configuración dentro de la aplicación. Dónde están las plantillas:
app.set('views', 'views');
// El motor de plantillas:
app.set('view engine', 'ejs');

app.use(express.json());

const routerTasks = require('./routers/routerTasks')
app.use('/tasks', routerTasks);

app.listen(port, () => {
    console.log('Servidor activo')
});