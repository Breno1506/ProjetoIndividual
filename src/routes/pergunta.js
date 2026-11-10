var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.post("/cadastrar", function (req, res) {
    perguntaController.cadastrar(req, res);
});

router.get("/buscar", function (req, res) {
    perguntaController.buscarPorTexto(req, res);
});

router.get("/buscar/:id", function (req, res) {
    perguntaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
    perguntaController.listar(req, res);
});

module.exports = router;