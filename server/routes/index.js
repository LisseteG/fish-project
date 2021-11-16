var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', proj: 'Fish-project'});
});

//las rutas que se definen 
//para los métodos GET a la raíz de la aplicación
router.get('/hola', function (req, res, next){
  res.send('Respond with a resource');
}) 

module.exports = router;
