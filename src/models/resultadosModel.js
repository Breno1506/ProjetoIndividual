var database = require("../database/config");

function publicar(idUsuario, idPersonagem) {
    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, fkPersonagem, dtResultado)
        VALUES ('${idUsuario}', '${idPersonagem}', NOW());
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    publicar
};