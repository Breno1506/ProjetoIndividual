var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT 
            r.idResultado,
            r.fkUsuario,
            r.fkPersonagem,
            r.dtResultado,
            p.nome AS nomePersonagem
        FROM resultado r
        JOIN Personagem p ON r.fkPersonagem = p.idPersonagem
        ORDER BY r.idResultado DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            r.idResultado,
            r.fkUsuario,
            r.fkPersonagem,
            r.dtResultado,
            p.nome AS nomePersonagem,
            p.descricao AS descricaoPersonagem
        FROM resultado r
        JOIN Personagem p ON r.fkPersonagem = p.idPersonagem
        WHERE r.fkUsuario = ${idUsuario}
        ORDER BY r.idResultado DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(idPersonagem, idUsuario) {
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, fkPersonagem) VALUES (${idUsuario}, ${idPersonagem});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idResultado) {
    var instrucaoSql = `
        DELETE FROM resultado WHERE idResultado = ${idResultado};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarPorPersonagem() {
    var instrucaoSql = `
        SELECT p.nome, COUNT(r.idResultado) AS total
        FROM resultado r
        JOIN Personagem p ON r.fkPersonagem = p.idPersonagem
        GROUP BY p.nome
        ORDER BY total DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar,
    deletar,
    contarPorPersonagem
}