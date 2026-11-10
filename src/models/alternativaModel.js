var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT 
            a.idAlternativa,
            a.texto,
            a.fkPergunta,
            a.fkPersonagem,
            p.nome AS nomePersonagem
        FROM alternativa a
        JOIN Personagem p ON a.fkPersonagem = p.idPersonagem
        ORDER BY a.idAlternativa;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorPergunta(idPergunta) {
    var instrucaoSql = `
        SELECT 
            a.idAlternativa,
            a.texto,
            a.fkPergunta,
            a.fkPersonagem,
            p.nome AS nomePersonagem
        FROM alternativa a
        JOIN Personagem p ON a.fkPersonagem = p.idPersonagem
        WHERE a.fkPergunta = ${idPergunta}
        ORDER BY a.idAlternativa;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(texto, idPergunta, idPersonagem) {
    var instrucaoSql = `INSERT INTO alternativa (texto, fkPergunta, fkPersonagem) VALUES ('${texto}', ${idPergunta}, ${idPersonagem})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novoTexto, idAlternativa) {
    var instrucaoSql = `UPDATE alternativa SET texto = '${novoTexto}' WHERE idAlternativa = ${idAlternativa}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAlternativa) {
    var instrucaoSql = `DELETE FROM alternativa WHERE idAlternativa = ${idAlternativa}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorPergunta,
    publicar,
    editar,
    deletar
}