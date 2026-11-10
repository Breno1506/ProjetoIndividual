var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/listar", function (req, res) {
    resultadoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    resultadoController.listarPorUsuario(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    resultadoController.publicar(req, res);
});

router.delete("/deletar/:idResultado", function (req, res) {
    resultadoController.deletar(req, res);
});

module.exports = router;