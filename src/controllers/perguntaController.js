var perguntaModel = require("../models/perguntaModel");

function buscarPorTexto(req, res) {
  var texto = req.query.texto;

  perguntaModel.buscarPorTexto(texto).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  perguntaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  perguntaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var texto = req.body.texto;

  perguntaModel.buscarPorTexto(texto).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a pergunta "${texto}" já existe` });
    } else {
      perguntaModel.cadastrar(texto).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorTexto,
  buscarPorId,
  cadastrar,
  listar,
};