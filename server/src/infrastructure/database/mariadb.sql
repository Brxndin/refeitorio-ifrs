CREATE DATABASE refeitorio_ifrs;

USE refeitorio_ifrs;

CREATE TABLE usuarios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    senha VARCHAR(200),
    tipo INT NOT NULL
);

CREATE TABLE cardapios(
    id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE NOT NULL,
    favorito INT NOT NULL
);

CREATE TABLE refeicoes(
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo INT NOT NULL,
    cardapio_id INT NOT NULL,

    FOREIGN KEY (cardapio_id) REFERENCES cardapios(id)
);

CREATE TABLE refeicoes_itens(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    refeicao_id INT NOT NULL,

    FOREIGN KEY (refeicao_id) REFERENCES refeicoes(id)
);

-- senha: Senha.123
INSERT INTO usuarios
(nome, email, senha, tipo)
VALUES ('Administrador', 'admin@ifrs.edu.br', '$2b$12$fkCox86SvdMTzA7c6XDWLuIEBeq7fPa2ST3Uql8iY5sFkgD/9erXi', 1);
