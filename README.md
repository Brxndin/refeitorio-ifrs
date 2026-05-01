# Refeitório IFRS

Sistema desenvolvido para visualização do cardápio do refeitório do IFRS - Campus Bento Gonçalves.

## Objetivo

Desenvolvido para a cadeira de Programação para Aplicativos Móveis.
Além disso, tem como objetivo aprofundar os estudos na Clean Architecture, SOLID e Domain-Driven Design e também no TypeScript.

## Tecnologias usadas

### App
- Expo
- React Native
- TypeScript

### Server
- TypeScript
- Express
- MariaDB
- Knex.js
- Docker
- JWT

## Como usar

Para usar o app e o servidor, serão necessários alguns passos para instalar as dependências e configurar o que é necessário.

### /server

- Entre na pasta usando `cd server`.
- Instale as dependências usando `npm i`.
- Copie o arquivo `.env.example` e renomeie para `.env`. Após fazer isso, mude as informações, como senhas, ports dos serviços etc. Recomendo que a tabela do banco de dados (o DB_DATABASE) seja "cardapio_ifrs" para seguir o arquivo de modelagem do banco de dados.
- Instale a imagem do MariaDB no Docker usando o comando `docker compose up -d`.
- Se conecte ao MariaDB com o software de sua escolha (como, por exemplo, Beekeeper Studio) e rode o comando abaixo (conforme arquivo de modelagem do banco de dados). Isso é necessário pois iremos usar o Knex para as querys, migrations e seeds, porém ele não cria a database, então ela já deve existir antes.
 ```sql
 CREATE DATABASE refeitorio_ifrs;
 ```
- Rode os comandos `npm run migrate:latest` e `npm run seed:run` para criar as tabelas no banco de dados com dados iniciais.
- Para rodar o projeto no formato de desenvolvimento, use o comando `npm run dev`.

### /app

- Entre na pasta usando `cd app`.
- Instale as dependências usando o comando `npx expo install`.
- Inicie o aplicativo usando o comando `npx expo start`. Isso inicia o preview numa versão que pode ser visualizada no navegador e também permite visualizar o app diretamente no celular usando o aplicativo Expo Go no Android ou Camera app no iOS.

Após isso, se tudo deu certo, será mostrado o link de acesso ao servidor (para a versão web) e um QR Code ou link de acesso (que será o IP do computador que está rodando o projeto para que seja possível acessar pelo Expo Go).

Para instalar de fato o aplicativo no próprio celular:

- Seria necessário ter uma conta no site da Expo e iniciar um processo de build usando o EAS (por meio do pacote `eas-cli`) e algumas configurações nos arquivos `.json` do projeto.

Fazendo dessa forma, é possível gerar um arquivo `.aab`, que será enviado para a PlayStore, ou um arquivo `.apk`, que permitira a instalação direta no celular, porém não vou abordar a fundo essas opções.

# Acesso

O usuário padrão tem o e-mail `admin@ifrs.edu.br` e a senha `1234`. Ele tem acesso a áreas restritas por ser administrador.
Também há um segundo usuário com o e-mail `maria@ifrs.edu.br` e a senha `1234`. Ele somente tem os acessos comuns pois não é administrador.
