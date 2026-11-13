var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadosController");

router.post("/publicar/:idUsuario", function (req, res) {
    resultadoController.publicar(req, res);
});

module.exports = router;