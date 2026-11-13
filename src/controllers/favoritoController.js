var favoritoModel = require("../models/favoritoModel");

function buscarFavoritosPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    favoritoModel.buscarFavoritosPorUsuario(idUsuario).then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os favoritos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function publicar(req, res) {
    var idUsuario = req.params.idUsuario;
    var idPersonagem = req.body.idPersonagemServer;

    if (idPersonagem == undefined) {
        res.status(400).send("idPersonagem está undefined!");
    } else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    } else {
        favoritoModel.publicar(idPersonagem, idUsuario)
            .then((resultado) => {
                res.status(201).json(resultado);
            })
            .catch((erro) => {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function buscarMetricasFavoritos(req, res) {
    favoritoModel.buscarMetricasFavoritos()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).json([]);
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as métricas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarFavoritosPorUsuario,
    publicar,
    buscarMetricasFavoritos
}