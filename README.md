# Avaliação Junior

Olá! Essa é a minha resolução do teste para a vaga de Estágio da Ímpar.
Vou explicar um pouco sobre a forma que pensei nesta solução e sobre como fazer o código rodar.

Clique nos links abaixo para navegar por esse documento:

- [A Solução;](#Solucao)

- [Como fazer o código rodar em sua máquina.](#Passos)


## 💡 <a id="Solucao">A Solução:</a>

A proposta era produzir uma barra de pesquisa, capaz de buscar e exibir itens conforme aquilo que foi digitado, utilizando como base o layout do link fornecido e exibir alertas para as funções ainda não implementadas no projeto.

Utilizei React para a criação da interface, styled-components para a estilização e a biblioteca Axios para consumir a API usada para a exibição dos dados.

Em busca de uma API gratuita e sem chaves, que pudesse me fornecer não somente dados escritos mas também imagens para preencher os campos dos cards, encontrei a [API da animação Rick and Morty](https://rickandmortyapi.com/documentation). Trouxe da API escolhida a imagem dos personagens, o nome e sua respectiva localização.

Para o alerta, criei uma modal com o aviso de funcionalidade não implementada e utilizei a biblioteca Lottie Files para trazer uma animação simples de erro.

Para complementar o tema dos cards, modifiquei a imagem de fundo do campo de busca.



## 🖥️ <a id="Passos">Como fazer meu código rodar em sua máquina:</a>

1. **Baixando o código:**

   É possível fazer o download de duas formas:

   - **Clicando em *Code > Download ZIP*, no topo desta página.**

     Dessa forma, você irá baixar um arquivo ZIP e extrair em uma pasta de sua escolha.



   - **Utilizando o terminal do git.**

     Tendo o git instalado em sua máquina ([caso não tenha, clique aqui para ir a página de download](https://git-scm.com/downloads)), no terminal escreva:

     ```git
     git clone https://github.com/eduardapalm/frontendjr.git
     ```

     Dessa forma o projeto será clonado e baixado na sua máquina.



2. **Preparando ambiente:**

   Para a execução do código, será necessário ter o Node instalado em sua máquina. Portanto, caso você não o tenha instalado, siga esse [link](https://nodejs.org/pt-br/download/) para fazer a instalação.

   Com o Node instalado, abra em seu terminal na pasta onde o projeto está localizado e escreva o comando abaixo para instalar as dependências necessárias para a execução:

   ```
   npm install
   ```



3. **Execução do Projeto:**

   Agora que seu ambiente está pronto para executar o projeto, é só digitar o seguinte comando no terminal:

   ```
   npm start
   ```

