var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render("index", { titulo: "Pagina Principal curso JS" });
})

router.get('/productos', (req, res) => {
  res.render("productos", { tituloProductos: "Titulo PRODUCTOS 1JUL22" });
})

router.get('/servicios', (req, res) => {
  res.render("servicios", { tituloServicios: "Titulo Dinamico de Servicios" });
})

router.get('/catalogos', (req, res) => {
  res.render("catalogos", { tituloCatalogos: "Titulo Dinamico de Catalogos" });
})
  
module.exports = router;
