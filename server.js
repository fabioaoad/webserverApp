const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


//midleware
app.use( express.static( __dirname + '/public' ) );

// express hbs y directorio de los parciales
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');




app.get('/', (req, res) => {
   res.render('home',{
       nombre: 'Fabio MarTin AoAd'
   });
});


app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});