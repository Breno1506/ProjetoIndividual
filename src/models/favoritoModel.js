var database = require("../database/config");

function publicar(idPersonagem, idUsuario) {
    var instrucaoSql = `
        INSERT INTO favorito (fkPersonagem, fkUsuario) VALUES (${idPersonagem}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarFavoritosPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT personagem.nome AS nomePersonagem 
        FROM favorito 
        JOIN personagem ON favorito.fkPersonagem = personagem.idPersonagem 
        WHERE favorito.fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetricasFavoritos() {
    var instrucaoSql = `
        SELECT p.nome AS nomePersonagem, COUNT(f.idFavorito) AS totalVotos
        FROM Personagem p
        LEFT JOIN favorito f ON p.idPersonagem = f.fkPersonagem
        GROUP BY p.idPersonagem, p.nome
        ORDER BY totalVotos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar,
    buscarFavoritosPorUsuario,
    buscarMetricasFavoritos
};