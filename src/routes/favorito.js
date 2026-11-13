var express = require("express");
var router = express.Router();

var favoritoController = require("../controllers/favoritoController");

router.post("/publicar/:idUsuario", function (req, res) {
    favoritoController.publicar(req, res);
});

router.get("/metricas", function (req, res) {
    favoritoController.buscarMetricasFavoritos(req, res);
});

module.exports = router;