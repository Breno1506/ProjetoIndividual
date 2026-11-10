var database = require("../database/config");

function buscarFavoritosPorUsuario(idUsuario) {

    var instrucaoSql = `
        SELECT 
            f.idFavorito,
            f.fkUsuario,
            f.fkPersonagem,
            p.nome,
            p.descricao
        FROM favorito f
        JOIN Personagem p ON f.fkPersonagem = p.idPersonagem
        WHERE f.fkUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(idPersonagem, idUsuario) {
    var instrucaoSql = `INSERT INTO favorito (fkUsuario, fkPersonagem) VALUES (${idUsuario}, ${idPersonagem})`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarFavoritosPorUsuario,
    cadastrar
}