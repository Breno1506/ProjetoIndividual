var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/listar", function (req, res) {
    personagemController.listar(req, res);
});

router.get("/buscar/:idPersonagem", function (req, res) {
    personagemController.buscarPorId(req, res);
});

module.exports = router;