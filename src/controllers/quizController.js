var quizModel = require("../models/quizModel");

function listarQuiz(req, res) {
    quizModel.listarQuiz()
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { listarQuiz };