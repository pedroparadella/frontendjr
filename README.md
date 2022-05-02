# Desafio frontend Ímpar :airplane:


## :page_facing_up: Descrição do Projeto 
Este projeto tem como objetivo analisar o conhecimento técnico, o estilo de resolver problemas e programar do candidadto.

## :computer: Desenvolvimento
Para desenvolver esse projeto eu optei por utilizar **<a href="https://pt-br.reactjs.org/">React</a>** em conjunto com o framework **<a href="https://nextjs.org/">Next.Js</a>**, com certeza tecnicamente não havia necessidade de se usar um framwork, porém com o objetivo de aprender ferramentas novas decidi desenvolver utilizando tal framework. Para a estilização do projeto utilizei **<a href="https://styled-components.com/">styled-components</a>**

Deve comentar que como foi a primeira vez que utilizei Typescript e Next.Js, tive alguns problemas, que a propósito foi meu maior desafio, fazer a configuração dos dois, mas nada que um boa lida na documentação (stackoverflow) não resolvesse.

## :technologist: Inicialização
Após o **git clone** abra o terminal na pasta do projeto e execute os seguintes comandos:
  - cd frontend
  - yarn
  - yarn dev
  - Acesse [http://localhost:3000](http://localhost:3000/) no seu browser.
  - Ou então se estiver utilizando VScode, aperte ctrl + shift + p, digite 'simple browser' e abra o projeto no browser do vscode.

## :hammer_and_wrench: Ferramentas utilizadas
- **<a href="https://pt-br.reactjs.org/">React</a>**
- **<a href="https://www.typescriptlang.org//">Typescript</a>**
- **<a href="https://nextjs.org/">Next.Js</a>**
- **<a href="https://styled-components.com/">styled-components</a>**
- **<a href="https://developer.marvel.com/">Marvel Developer Portal</a>**
- **<a href="https://xd.adobe.com/view/c715f110-fbd4-4323-be0c-0e453c1450db-9246/">Adobe XD, Layout do projeto</a>**

## :gear: Funcionalidades
  - [x] Replicar layout
  - [x] Fazer a funcionalidade de busca funcionar
  - [x] Modal de criar card, excluir card e 'funcionalidade não criada'

## :monocle_face: Observações
Optei por utilizar um api de personagens da Marvel (não achei da DC :pleading_face:). E ela precisa de algumas configurações para poder utiliza-la. Essas configurações pódem ser observadas em: src/hooks/useRequest.tsx.
Algumas dessas informações são sensíveis como privateKey e publicKey e o correto seria configura variáveis de hambiente um arquivo .env para protege-las, não achei necessario, porém deixo aqui meu conhecimento do que seria uma boa prática. 

