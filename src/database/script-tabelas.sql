CREATE TABLE usuario (
    idusuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(100),
    senha VARCHAR(45)
);

CREATE TABLE Personagem (
    idPersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    descricao VARCHAR(255)
);

CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkPersonagem INT,
    dtResultado DATETIME,
    CONSTRAINT fk_resultado_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario),
    CONSTRAINT fk_resultado_personagem
        FOREIGN KEY (fkPersonagem) REFERENCES Personagem(idPersonagem)
);
 
CREATE TABLE avaliacao (
    idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    nota INT,
    dtAvaliacao DATETIME,
    CONSTRAINT fk_avaliacao_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario)
);
 
CREATE TABLE favorito (
    idFavorito INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    fkPersonagem INT,
    CONSTRAINT fk_favorito_usuario
        FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario),
    CONSTRAINT fk_favorito_personagem
        FOREIGN KEY (fkPersonagem) REFERENCES Personagem(idPersonagem)
);
