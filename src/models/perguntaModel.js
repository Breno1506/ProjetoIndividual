var database = require("../database/config");

function listar() {
    var instrucaoSql = `SELECT idPergunta, texto FROM pergunta`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorId(idPergunta) {
    var instrucaoSql = `SELECT idPergunta, texto FROM pergunta WHERE idPergunta = ${idPergunta}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorTexto(texto) {
    var instrucaoSql = `SELECT idPergunta, texto FROM pergunta WHERE texto = '${texto}'`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(texto) {
    var instrucaoSql = `INSERT INTO pergunta (texto) VALUES ('${texto}')`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    buscarPorId,
    buscarPorTexto,
    cadastrar
};