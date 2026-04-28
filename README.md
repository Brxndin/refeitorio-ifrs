# Refeitório IFRS

Sistema desenvolvido para visualização do cardápio do refeitório do IFRS - Campus Bento Gonçalves.

## Objetivo

Desenvolvido para a cadeira de Desenvolvimento para Aplicativos Móveis.

## Tecnologias usadas

- Expo
- React Native
- TypeScript

## Como usar

### /app

Para usar o app, são necessários alguns passos para instalar as dependências e configurar o que é necessário.

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
