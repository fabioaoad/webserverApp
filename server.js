const express = require('express');
const app = express();

//midleware
app.use( express.static( __dirname + '/public' ) );




// app.get('/', (req, res) => {
//     //res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Fabio Martin',
//         apellido: 'Aoad',
//         url: req.url
//     };
//     res.send(salida);
// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});