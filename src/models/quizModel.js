var database = require("../database/config");

function listarQuiz() {
    var instrucaoSql = `
        SELECT 
            p.idPergunta, 
            p.texto AS textoPergunta,
            a.idAlternativa, 
            a.texto AS textoAlternativa,
            pers.nome AS nomePersonagem
        FROM pergunta AS p
        JOIN alternativa AS a ON a.fkPergunta = p.idPergunta
        JOIN Personagem AS pers ON a.fkPersonagem = pers.idPersonagem;
    `;
    return database.executar(instrucaoSql);
}

module.exports = { listarQuiz };