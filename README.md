# Avaliação Junior
Teste Impar!\
Luiz Felipe Teixeira Farias😊\
\
## O que fazer para o projeto Rodar 

1. Instalando o Chocolatey, execute o powershell como administrador e execute o comando para verificar se você possui permissões para instalar dependêcias com terminal. Comando: <strong>Get-ExecutionPolicy</strong>
2. Caso o retorno desse comando seja diferente de "Restricted" pule para o próximo passo. Porém, se o retorno for “Restricted”, execute o seguinte comando em seu terminal: <strong>Set-ExecutionPolicy AllSigned</strong>
3. Agora, execute o seguinte comando para instalar o Chocolatey: <strong>Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))</strong>

2. Agora vamos instalar o Node.js e a JDK, execute o comando no terminal: <strong>choco install -y nodejs-lts openjdk11</strong>

3. Instalando o Yarn
Execute o comando para instalar o Yarn: npm install --global yarn
Caso você tenha problemas com a instalação do Yarn pelo npm, você pode utilizar o método alternativo choco install yarn no Powershell como administrador,
Para que as instalações globais do Yarn funcionem, vamos ter que fazer mais um passo. Execute o comando: <strong>yarn global bin</strong>
4. Para que as instalações globais do Yarn funcionem, vamos ter que fazer mais um passo. Execute o comando: <strong>yarn global bin</strong>
5. Com tudo instalado execute dentro do terminal no diretorio do projeto o comando: <strong>yarn install</strong>
6. Depois de ter finalizado o download de todas as dependencias do projeto execute o comando: <strong>yarn start</strong>
7. Pronto só aguarda a inicialização do projeto!!
## Link do Teste 
http://testeimparluiz.ddns.net/
irei deixar online caso queira ter uma visualização rapida!
## Funcionalidades do Projeto
1. Consumir informações da API https://pokeapi.co/
2. busca por nome de Pokemon
3. Excluir Pokemon
4. SideBar
