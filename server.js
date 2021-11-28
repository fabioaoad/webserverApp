const express = require('express');
const app = express();
const hbs = require('hbs');


const port = process.env.PORT || 3000;

//midleware
app.use( express.static( __dirname + '/public' ) );

// express hbs y directorio de los parciales
hbs.registerPartials( __dirname + '/views/parciales' );
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   res.render('home',{
       nombre: 'Fabio Martin Aoad',
       anio: new Date().getFullYear()
   });
});


app.get('/about', (req, res) => {
    res.render('about',{
        anio: new Date().getFullYear()
    });
});
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});