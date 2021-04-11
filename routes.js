const express = require("express");

const routes = express.Router();
const DocumentsController = require("./controller/DocumentsController");
const Authenticate = require("./services/auth");

routes.get("/clientes", DocumentsController.index);

// routes.post("/clientes", DocumentsController.store);

routes.post("/login", Authenticate.login);

routes.get("/", (req,res)=>{
    return res.json({"Versão":"4","Status":"Up"}); 
});

module.exports = routes;