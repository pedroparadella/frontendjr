#  Avaliação Junior
Hello, Ímpar!  :smiley: 

Abaixo estarão listados o modo de execução de código, sobre <u>como preparar o ambiente para a execução do mesmo, e a proposta de solução do projeto teste</u> para a vaga de **Estágio na Ímpar!**

## Sumário

[TOC]

## Solução do Projeto :rotating_light:
A proposta de solução do projeto, utilizando como base o layout de orientação, foi implementar uma barra de pesquisa, onde, após o usuário inserir o nome de um Pokemon, a web aplicação retorne alguns Cards com o nome do Pokemon e com os atributos relacionados ao mesmo. 

Fiz o uso do **React** para a criação da interface gráfica e a biblioteca **Axios** para consumir a API utilizada para a exibir os dados dentro dos cards.

Para a criação e exibição dos Cards, utilizei o framework https://mui.com/pt/getting-started/usage/

Apliquei a **API** recomendada, a https://pokeapi.co/, para retornar os dados dos Pokemons selecionados.

Para estilização da página, apliquei o **Cascading Style Sheets**.

## Passo-a-passo para rodar o código em sua máquina :footprints:
Há duas maneiras de efetuar o download do código em questão, sendo elas:

1. No topo da página do **github**, procure por **Code** e, em seguida, clique em *Download Zip*.

   1.1 Após isso, o arquivo será transferido para a sua máquina e você pode fazer a extração do arquivo Zip para um workspace de sua escolha.

Ou

2. Utilizando a Command Line do Git

   2.1 Caso não tenha o software Git instalado em sua máquina, recomendo efetuar o download atráves do site https://git-scm.com/downloads.

   2.2 Após efetuar o download e instalação do Git, execute-o  e, em seguida, utilizando a Command Line, vá até o diretório desejado para receber os arquivos do código.

   2.3 Dentro do diretório desejado, digite dentro da Command Line o seguinte comando: 

   ```html
   git clone https://github.com/EletherioAlexandre/frontendjr
   ```

   Após digitar o comando orientado, deverá ser exibida uma série de caracteres semelhantes ao do bloco abaixo. Caso retorne algo diferente disso, por favor, realize o passo-a-passo novamente e atente-se para os possíveis detalhes.

   ```html
   $ git clone https://github.com/EletherioAlexandre/frontendjr
   Cloning into 'frontendjr'...
   remote: Enumerating objects: 102, done.
   remote: Counting objects: 100% (102/102), done.
   remote: Compressing objects: 100% (78/78), done.
   remote: Total 102 (delta 23), reused 68 (delta 12), pack-reused 0
   Receiving objects: 100% (102/102), 4.15 MiB | 2.85 MiB/s, done.
   Resolving deltas: 100% (23/23), done.
   ```
   
   Desse modo, o projeto será clonado e baixado dentro de sua máquina e pronto para realizar qualquer tipo de alteração na codificação, caso tenha interesse.
   

## Preparando o Ambiente de Execução :desktop_computer:

Para conseguir efetuar a execução do código com 100% de sucesso, siga as próximas orientações:

#### Preparação de Ambiente

1. Será necessário ter o Node.js instalado em sua máquina. Logo, caso não possua o mesmo instalado, sugiro que faça a instalação **LTS** através do site https://nodejs.org/pt-br/download/

​	1.1 Após o download e instalação do Node.js, abra a sua **Command Line** através do git, vá até o diretório (pasta) onde o projeto foi clonado e digite o seguinte comando para instalar as dependências necessárias para a execução do projeto:

```html
npm install
```

Neste momento, após a finalização do processo de instalação do *npm install* a sua máquina estará totalmente configurada para executarmos o projeto.



2. #### Execução do Projeto:

​	Digite o seguinte comando na Command Line:

```html
npm start
```

Após digitar este comando e apertar a tecla ENTER, ele vai processar o comando e, logo após, deverá aparecer uma série de caracteres semelhantes aos do bloco abaixo:

```html
$ npm start

my-react-app@0.1.0 start
react-scripts start

Starting the development server...

Compiled successfully!

You can now view my-react-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.12:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

assets by path static/ 3.05 MiB
  assets by path static/media/*.svg 3.31 KiB
    asset static/media/icone.ae3bec440ee8b70870dd.svg 2.33 KiB [emitted] [immutable] [from: src/assets/images/icone.svg] (auxiliary name: main)
    asset static/media/Icon-trash.042f9538940733c6ee71eb4670ae3618.svg 645 bytes [emitted] (auxiliary name: main)
    asset static/media/Icon-edit.17ec8bd462949f7de1727268833b1f40.svg 368 bytes [emitted] (auxiliary name: main)
  asset static/js/bundle.js 2.3 MiB [emitted] (name: main) 1 related asset
  asset static/media/fundo-busca.12ff68cfdfeaa530f641.png 765 KiB [emitted] [immutable] [from: src/assets/images/fundo-busca.png] (auxiliary name: main)
asset index.html 2 KiB [emitted]
asset asset-manifest.json 556 bytes [emitted]
cached modules 2.25 MiB (javascript) 768 KiB (asset) 28.3 KiB (runtime) [cached] 508 modules
webpack 5.65.0 compiled successfully in 24859 ms
```



Após a aparição deste código, o projeto já estará rodando no seu localhost. Não finalize a Command Line deixe-a executando minimizada. 

Abra o seu browser e acesse o http://localhost:3000 para visualizar o projeto.



## Agradecimentos

Gostaria de agradecer, desde já, pela oportunidade de participar do processo seletivo do Estágio, à Caroline Rodrigues por intermediar todo o processo e por ter disponibilizado o seu tempo para as devidas orientações, agradecer a todos os membros responsáveis por este processo, e ao avaliador do Projeto pelas instruções de como executar o projeto e pela avaliação que será feita.

 :smile:
