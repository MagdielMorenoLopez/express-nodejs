const express = require('express');
const bodyParser = require('body-parser'); //madar a llamar al dody parse del packege json para el middleware
const app = express();
const path = require('path'); // para poder llamar las vistas es necesario 
const routes = require('./routes/index');
const { Mongoose } = require('mongoose');

const { use } = require('./routes/index');





//setingg configuaraicones del servido
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
//middlewares
app.use((req, res, next) =>{
    console.log(`${req.url} -${req.method}`);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//routes
app.use(routes);

// archivos staticos
app.use(express.static(path.join(__dirname, 'publc')));


//iuniciar servidor
app.listen(app.get('port'),() => {
    console.log('serve on port', app.get('port'))
});

