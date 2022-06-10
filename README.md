# Projeto Front-end JR

Projeto deseonvolvido com React para front-end e lib json-server para simular um backend;

## Pré-requisitos para rodar o projeto

Para rodar o projeto você precisa ter instalado o GIT e Nodejs;

## Hora de rodar o projeto

Abra o terminal e clone o repositório
$ git clone https://github.com/gabrielluiz01/frontendjr.git

# Entre na pasta do projeto

$ cd frontendjr

Instale todas as dependências
$ yarn install ou npm install

Agora iremos executar o json-server para que nossa "API" rode
$ npx json-server -p 8000 db.json

E agora sim rodamos o front-end da aplicação
$ yarn dev ou npm run dev

A aplicação estará rodando na porta 3000 - http://localhost:3000/

OBS: Para que toda a aplicação esteja funcionando perfeitamente lembre-se de deixar o json-server rodando junto com o front

# Tecnologias

Para criação dessa aplicação usei seguintes tecnologias:

- ReactJS
- Axios
- Styled-components
- json-server

Feito por Gabriel Luiz
