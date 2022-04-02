Instruções:
- Ir até https://github.com/CDirRyo/frontendjr e clicar em Code (botão verde).
- Baixar como zip e unzipar o arquivo |ou| Copie a url e digite "git clone {url}" no cmd/git bash.
- Abra a pasta em um editor como VSCode |ou| Use o comando "cd" no cmd para entrar na pasta do projeto.
- Caso ainda não tenha NPM/Node instalado, baixe em https://nodejs.org/en/ . Digite "npm -v" para saber se você já possui npm e qual a versão.
- Digite "npm install" no terminal (ctrl+' para abrir) para instalar as dependências do projeto e aperte enter.
- Digite "npm start" para rodar e aperte enter.

Utilidade:
Este aplicativo serve como uma wishlist ou lista de busca por promoções de jogos.

Funcionalidades:
- Clicando no botão "Adicionar" é aberto um formulário onde o usuário pode digitar o nome do jogo e um link de uma imagem para o card. Não é aceito nome duplicado.
- No card, o usuário pode ver o nome escolhido e o título encontrado, e tem a opção de excluir, editar e ver qual o menor preço no banco de dados. Clicando no botão de preço, o usuário é redirecionado à página do jogo na loja.
- Caso o usuário não coloque uma imagem, uma imagem padrão é usada. Caso o jogo não seja encontrado no banco de dados, o link do preço leva à página principal da steam.
- Clicando em editar, o usuário abre novamente o formlulário para preencher. 
- A barra de busca funciona em tempo real, filtrando os jogos da lista. O botão na lateral direita da barra serve para limpar a busca.
- Local Storage é usado como substituto temporário de um banco de dados. Mesmo que o usuário atualize a página, a lista continua salva.
- O site é todo responsivo, não importando o tamanho do aparelho ou da tela.

Tecnologias:
- Javascript, HTML e CSS.
- React como framework/biblioteca de front-end.
- Axios para se comunicar com a API.
- SASS para criar os estilos.
- Framer-Motion para animação de alguns componentes.
- Git e GitHub para controle de versões.
- VSCode como editor.
- Yarn e NPM como gerenciadores de pacote.

Erros e possíveis melhorias:
- A API não parece enviar resposta para ips brasileiros, sendo necessário um proxy ou vpn. Entrei em contato com o suporte e parece ter sido resolvido.
- Design pode ser melhorado com um sistema de design.
- Código pode ser mais limpo e eficiente. 
- SASS pode ser ainda mais eficiente.
- Poderia ter adotado um padrão no controle de versões.
- Criação de tela de confirmação de exclusão.
- Criação de botão para excluir a lista inteira. 
- Melhor organização dos arquivos.
- Melhor uso do HTML para SEO técnico.
- Tamanho dos botões pode não ser o mais adequado para mobile.
- Aviso visual que o titulo digitado não é válido.