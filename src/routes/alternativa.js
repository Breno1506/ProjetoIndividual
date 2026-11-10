var express = require("express");
var router = express.Router();

var alternativaController = require("../controllers/alternativaController");

router.get("/listar", function (req, res) {
    alternativaController.listar(req, res);
});

router.get("/listar/:idPergunta", function (req, res) {
    alternativaController.listarPorPergunta(req, res);
});

router.post("/publicar/:idPergunta", function (req, res) {
    alternativaController.publicar(req, res);
});

router.put("/editar/:idAlternativa", function (req, res) {
    alternativaController.editar(req, res);
});

router.delete("/deletar/:idAlternativa", function (req, res) {
    alternativaController.deletar(req, res);
});

module.exports = router;