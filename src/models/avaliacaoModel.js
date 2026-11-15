var database = require("../database/config");

function listar() {
    var instrucaoSql = `
        SELECT 
            a.idAvaliacao,
            a.fkUsuario,
            a.nota,
            a.dtAvaliacao,
            u.nome
        FROM avaliacao a
        JOIN usuario u ON a.fkUsuario = u.idusuario
        ORDER BY a.idAvaliacao DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT 
            a.idAvaliacao,
            a.fkUsuario,
            a.nota,
            a.dtAvaliacao,
            u.nome
        FROM avaliacao a
        JOIN usuario u ON a.fkUsuario = u.idusuario
        WHERE a.fkUsuario = ${idUsuario}
        ORDER BY a.idAvaliacao DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMetricas() {
    var instrucaoSql = `
        SELECT 
            nota, 
            COUNT(*) AS total 
        FROM avaliacao 
        GROUP BY nota 
        ORDER BY nota ASC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(nota, comentario, idUsuario) {
    var instrucaoSql = `INSERT INTO avaliacao (nota, comentario, fkUsuario, dtAvaliacao) VALUES (${nota}, '${comentario}', ${idUsuario}, NOW())`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaNota, idAvaliacao) {
    var instrucaoSql = `UPDATE avaliacao SET nota = ${novaNota} WHERE idAvaliacao = ${idAvaliacao}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAvaliacao) {
    var instrucaoSql = `DELETE FROM avaliacao WHERE idAvaliacao = ${idAvaliacao}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    publicar,
    editar,
    deletar,
    buscarMetricas
}