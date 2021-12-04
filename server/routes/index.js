import { Router } from 'express';
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', proj: 'Fish-project'});
});

//las rutas que se definen 
//para los métodos GET a la raíz de la aplicación
router.get('/', (_req, res) => {
  res.send('Respond with a resource');
}) 

export default router;
