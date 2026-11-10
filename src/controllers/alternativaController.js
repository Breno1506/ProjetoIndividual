var alternativaModel = require("../models/alternativaModel");

function listar(req, res) {
    alternativaModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as alternativas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorPergunta(req, res) {
    var idPergunta = req.params.idPergunta;

    alternativaModel.listarPorPergunta(idPergunta)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar as alternativas: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var texto = req.body.texto;
    var idPersonagem = req.body.idPersonagem;
    var idPergunta = req.params.idPergunta;

    if (texto == undefined) {
        res.status(400).send("O texto está indefinido!");
    } else if (idPersonagem == undefined) {
        res.status(400).send("O personagem está indefinido!");
    } else if (idPergunta == undefined) {
        res.status(403).send("O id da pergunta está indefinido!");
    } else {
        alternativaModel.publicar(texto, idPergunta, idPersonagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao salvar a alternativa: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editar(req, res) {
    var novoTexto = req.body.texto;
    var idAlternativa = req.params.idAlternativa;

    alternativaModel.editar(novoTexto, idAlternativa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao editar a alternativa: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletar(req, res) {
    var idAlternativa = req.params.idAlternativa;

    alternativaModel.deletar(idAlternativa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar a alternativa: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    listar,
    listarPorPergunta,
    publicar,
    editar,
    deletar
}