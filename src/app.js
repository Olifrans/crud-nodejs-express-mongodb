const path = require("path");

const express = require("express");
const logger = require("morgan");

const bodyparser = require("body-parser");

const app = express();

const indexRoutes = require("./routes/index");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


//middlewares
app.use(logger('dev'));
app.use(bodyparser.urlencoded({extended:false}));

//routes
app.use('/', indexRoutes);


app.listen(app.get("port"), () => {
    console.log('Servidor rodando na porta', app.get("port"))
});
