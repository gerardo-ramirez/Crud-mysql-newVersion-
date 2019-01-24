const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const route = require('./../router/root');





app.set('port', process.env.PORT || 8080);
app.set('view engine', 'ejs');
app.set ('views', path.join(__dirname, './../views'));

//middleware
app.use(express.urlencoded({extended: false}));

//staticfile
app.use(express.static(path.join(__dirname, './../public')));

app.use(morgan('dev'));

//route
app.use(route);

app.listen(app.get('port'),()=>{
    console.log('conexion!!!')
});
