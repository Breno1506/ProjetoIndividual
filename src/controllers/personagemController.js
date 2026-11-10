var personagemModel = require("../models/personagemModel");

function listar(req, res) {

    console.log(`Recuperando todos os personagens`);

    personagemModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os personagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarPorId(req, res) {

    var idPersonagem = req.params.idPersonagem;

    console.log(`Recuperando o personagem ${idPersonagem}`);

    personagemModel.buscarPorId(idPersonagem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o personagem.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    buscarPorId
}