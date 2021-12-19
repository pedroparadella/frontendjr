#  Avaliação Junior
Hello, Ímpar!  :smiley: 

Abaixo estarão listados o modo de execução de código, sobre <u>como preparar o ambiente para a execução do mesmo, e a proposta de solução do projeto teste</u> para a vaga de **Estágio na Ímpar!**

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

   ![image-20211218205842742](C:\Users\Zoommy\AppData\Roaming\Typora\typora-user-images\image-20211218205842742.png)

   Desse modo, o projeto será clonado e baixado dentro de sua máquina e pronto para realizar qualquer tipo de alteração na codificação, caso tenha interesse.

   Após digitar o comando orientado, deverá ser exibida uma série de caracteres semelhantes ao da imagem. Caso retorne algo diferente disso, por favor, realize o passo-a-passo novamente e atente-se para os possíveis detalhes.



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

![image-20211218211624571](C:\Users\Zoommy\AppData\Roaming\Typora\typora-user-images\image-20211218211624571.png)

Deverá ser exibido o código acima após o *npm start* e o código já estará em funcionamento. 

Abra o seu browser e acesse o http://localhost:3000 para visualizar o projeto.



## Agradecimentos

Gostaria de agradecer, desde já, pela oportunidade de participar do processo seletivo do Estágio, à Caroline Rodrigues por intermediar todo o processo e por ter disponibilizado o seu tempo para as devidas orientações, agradecer a todos os membros responsáveis por este processo, e ao avaliador do Projeto pelas instruções de como executar o projeto e pela avaliação que será feita.

 :smile:
