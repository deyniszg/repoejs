const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const ip = require('ip');
const ipAddress = ip.address();


console.log("valor de __dirname:"+__dirname);

// Motor de plantillas
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));
app.use("/bin",require('./routes/RutasExpress'))


app.use((req, res, next) => {
  res.status(404).render("404",{
    titulo: "Node JS EXPRESS",
    descripcion : "Proyecto Express"
  });
});
  


  app.listen(port, () => {
    console.log(`Servidor Express Escuchando en ip puerto ${ipAddress} ${port}   `)
  })

