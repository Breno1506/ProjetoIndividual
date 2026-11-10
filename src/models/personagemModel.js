var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT idPersonagem, nome, descricao FROM Personagem`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(idPersonagem) {
    var instrucaoSql = `SELECT idPersonagem, nome, descricao FROM Personagem WHERE idPersonagem = ${idPersonagem}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = { listar, buscarPorId };