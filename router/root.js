const express = require('express');
const route = express.Router();
const control = require('./../controllers/controller');

route.get('/', control.list);
route.post('/add', control.agregar);
route.get('/delete/:id', control.borrar);
route.get('/update/:id', control.buscar);
route.post('/update/:id', control.update);

module.exports = route;
