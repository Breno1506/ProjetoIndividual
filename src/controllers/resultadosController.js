var resultadoModel = require("../models/resultadosModel");

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idPersonagem = req.body.idPersonagemServer;

    resultadoModel.publicar(idUsuario, idPersonagem)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    publicar
};