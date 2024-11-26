# Tema - Inclusão Social

  # Introdução
  
  Este projeto tem como finalidade de divulgar o movimento escoteiro e o GETS (Grupo Escoteiro Terra da Saudade).
Um dos principais motivos para a construção deste projeto é facilitar o cadastro dos possíveis escoteiros/voluntários
e facilitar o controle de dados para os chefes, como por exemplo: ter um certo controle das pessoas que mudam de endereço,
se vai parar de participar das atividades do grupo e entre outros.

  # O que se espera?

  Se espera que o projeto seja bastante utilizado pela comunidade de escoteiros e que facilite o dia a dia dos chefes
  que são responsáveis pelo controle do grupo.

  # Features

  O nosso projeto tem como foco um cadastro simples de se fazer, uma comunicação com os chefes do grupo de maneira mais
  fácil e sem precisar falar com eles diretamente na sede do grupo, assim podendo tirar as maiorias das dúvidas dentro do
  nosso site e ter uma comunicação à distância sem precisar falar diretamente com os chefes do grupo para finalização
  de cadastro.

  O nosso projeto tem muito foco em acessibilidade, assim podendo facilitar o uso dos usuários que acabam tendo mais
  dificuldade com o uso da tecnologia, deixando bem prático e bem simplificado a utilização do nosso software.

  # Objetivo Principal

  Atrair novos membros para o grupo de escoteiros, tanto voluntários como jovens que poderão fazer parte do grupo. Registro dos jovens, responsáveis e voluntários. 
  E possivelmente atrair novas parcerias para o grupo.

  # Problema

  Problema principal dos chefes do grupo foi a falta de comunicação dos pais em irem diretamente à eles sobre a mudança de endereço, mudança de número de telefone
  e entre outros... por conta deste motivo, esse tipo de acontecimento acabam prejudicando a comunicação com os chefes do grupo, ou seja, caso ocorra algum acidente,
  os chefes não terão o número dos pais e nem o endereço para contatarem o responsável da criança, então por conta disso acabam sofrendo um grande problema no dia a dia.

  Problema secundário dos chefes é a falta de divulgação do grupo escoteiro. Muitos grupos dependentes da SAB tem um site como meio de divulgação das atividades de cada
  grupo, então o grupo precisa de um site para divulgar as atividades do grupo.

  # Solução

  Nossa solução é fazer a criação de um site com o uso de fotos do grupo, redes sociais do grupo e todo meio de divulgação possível do grupo. Fora isso, nós vamos criar
  toda a estrutura de suporte de dúvidas o possível para o usuário, e claro, sempre mantendo todo o foco possível em acessibilidade do site.
  Uma outra solução muito importante que nós iremos fazer é com base na tela de admin, ou seja, teremos uma tela para os chefes que poderão ter o controle das pessoas
  cadastradas dentro do sistema, assim podendo manter sempre atualizado com as informações que eles precisam para ter esse controle, e fora isso, eles poderão atualizar
  os dados das pessoas cadastradas caso eles peçam ao grupo para ser feito esse tipo de coisa. E como nosso site terá cadastro e login, o próprio usuário poderá fazer
  essas atualizações de informações pessoais, assim também ajudando o grupo e fazer isso de forma mais simplificada, ou seja, apenas com o celular sem precisar sair de casa.

# Requisitos Não Funcionais

<ul>
  <li>Paleta de cores</li>
  <li>Imagens</li>
  <li>Desempenho</li>
  <li>Usabilidade</li>
  <li>Segurança</li>
  <li>Escalabilidade</li>
  <li>Eficiência</li>
  <li>Responsividade</li>
</ul>

# Requisitos Funcionais

<ul>
  <li>Links de Navegação;</li>
  <li>Formulário;</li>
  <li>Integração com Redes Sociais;</li>
  <li>Gerenciamento de Conteúdo;</li>
  <li>Acessibilidade/Usabilidade;</li>
  <li>Sistema é capaz de cadastrar Voluntários, jovens que participam do grupo de escoteiros e seus responsáveis;</li>
  <li>Aqueles que já estão cadastrados no sistema, eles terão a opção de efetuar o login.</li>
</ul>

# Regras de Negócio

<ul>
  <li>LGPD</li>
  <li>Direitos de Imagens</li>
  <li>ECA</li>
</ul>

# Tecnologias Aplicadas

<ul>
  <li>React - Uma biblioteca de JavaScript que serve para criar interfaces de usuários para aplicativos web e móveis.</li>
  <li>
    Firebase - Um serviço de Back-End pronto que fornece diversos tipos de ferramentas, entre elas estão: Authentication,
    Firestore e Hosting. 
  </li>
  <li>GitHub - Uma plataforma de desenvolvedor colaborativa que serve para armazenar, compartilhar e gerenciar projetos.</li>
</ul>

# Wireframes - Alta Resolução (Desktop)

![Page - Home](https://github.com/user-attachments/assets/bfebf8c6-53f3-4d28-9fff-065bf9f1767c)
![Page - Administrative Panel](https://github.com/user-attachments/assets/c7dfd417-c249-431c-8cda-a4c86414166d)

# Wireframes - Alta Resolução (Mobile)

![Android Large - Home](https://github.com/user-attachments/assets/7ce89c3b-8488-4286-a740-756c46c18227)
![Android Large - Login](https://github.com/user-attachments/assets/55cf72f2-3621-4e18-8360-1d44c43f4fb8)

# Paleta de Cores

![image](https://github.com/user-attachments/assets/1532f060-dccb-4aa9-a4a1-fb2da1451f25)

# Quadro de Modelo de Negócios (Canvas)

![image](https://github.com/user-attachments/assets/d9ad4e37-43c1-4ee2-ab60-96116b24c16c)

## Sumário

1. [Configuração De Ambiente](#environment-configuration)
    - [Instalação do Nodejs](#nodejs-instalation)
    - [Como puxar o repositório para o meu computador?](#how-to-pull)
2. [Baixando e configurando ESLint](#make-eslint-configurations)
3. [Como fazer o deploy](#deploy)
4. [Boas práticas do trabalho com git](#good-practices)

<a id="environment-configuration"></a>

## Configurações De Ambiente

<a id="nodejs-instalation"></a>

### Instalação do Nodejs

1. Verifique se você possue o `Node.js` instalado executando o seguinte comando: `node --version`. Se o comando não retornar
a versão do Node.js, então siga para os próximos passos. Caso contrário, pule para a próxima sessão.
2. Instale o Node.js no seu computador seguindo o passo a passo abaixo que corresponde ao seu sistema operacional.
  - Windows:
    - Acessar o site oficial do Node.js [https://nodejs.org/en](node.js)
    - Baixar a versão LTS (Long-Term Support)
    - Execute o primeiro passo para verificar se a instalação foi concluída com sucesso
      - Caso ainda não funcione, tente executar os seguintes passos:
        1. Feche e abra o seu terminal
        2. Execute novamente o comando `node --version`. Caso ainda não funcione, execute os próximos passos.
        3. Abra o Power Shell em modo administrador
        4. Execute o seguinte comando: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`
        5. Rode novamente o comando `node --version`.
  - Mac:
    - No terminal no Mac, insira os seguintes comandos:
      ```bash
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)";
        brew update;
        brew install node;
      ```
    - Em seguida, execute `node --version` e confirme se a instalação foi concluída com sucesso
  - Linux
    - No terminal no Linux, insira os seguintes comandos:
      ```bash
        sudo apt update
        sudo apt install curl
        sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        nvm install --lts
      ```

<a id="how-to-pull"></a>

### Como puxar o repositório para o meu computador?

1. Para trazer o repositório do GitHub para o seu computador, execute um dos seguintes comandos (o mais comum é p HTTPS, mas se souber o que está fazendo, pode executar qualquer um dos outros):
    - HTTPS
        ```bash
          git clone https://github.com/Interdisciplinary-Project/Frontend.git
        ```
    - SSH
        ```bash
          git clone git@github.com:Interdisciplinary-Project/Frontend.git
        ```
    - GitHub CLI
        ```bash
          gh repo clone Interdisciplinary-Project/Frontend
        ```
2. Agora, execute os seguintes comandos para configurar o seu ambiente de desenvolvimento:
    ```bash
      cd Frontend # Este comando irá entrar dentro da pasta do projeto
      npm i # Este comando irá instalar todas as dependências necessárias para rodar o projeto
      code . # Este comando só deverá ser usado se você estiver usando o Visual Studio Code como Editor de Código Fonte
      npm run dev # Este comando irá rodar o ambiente de desenvolvimento onde você poderá ver suas alterações em tempo real
    ```

<a id="make-eslint-configurations"></a>

### Baixando e configurando o ESLint

#### Observação

Caso não queira instalar manualmente, rodar o projeto com o comando `npm run dev`
que a extensão será instalada automaticamente e o projeto já será rodado para
você começar a desenvolver. Caso queira realizar a instalação manual vá para
a próxima sessão. Após a instalação da extensão, vá para a sessão [Configurações do ESLint](#eslint-configuration)

Caso haja algum problema ao executar o comando `npm run dev`, siga os seguintes passos:

1. Execute `npm run build`. Se nenhum problema acontecer, execute `npm run start`. Caso
algum erro aconteça, vá para o próximo passo.
2. Neste momento, você deve ir para a branch main com `git switch main` e executar um
`git pull origin main`. Após isso, vá novamente para o passo número 1. Se mesmo assim
o problema persistir, entre em contato com o líder do projeto.

### Instalação manual

1. Inicialmente se faz necessário instalar uma extensão chamada `ESLint`. Para isso, procurem a aba de extensões (ou usem o atalho `ctrl+x`). Daí, pesquisem por `ESLint` e irá aparecer a extensão abaixo. Instale-a e vá para o próximo passo.

![image](https://github.com/user-attachments/assets/29d0aa7f-4c0e-42f3-95e6-b839c2a52086)


<a id="eslint-configuration"></a>

### Configurações do ESLint

1. Agora, com a extensão já instalada, você deve abrir o JSON de configurações do VSCode. Para isso, use o atalho `ctrl+shift+p`. Irá aparecer a seguinte barra de pesquisa:

![image](https://github.com/user-attachments/assets/e3b55b90-774b-4996-bf81-f299aef784ce)


2. Agora, pesquise `Preferences: Open User Settings (JSON)` e tecle `Enter`.
3. Dentro do par de {} que irá ter neste arquivo (caso ele não tenha nenhuma configuração previamente preenchida), insira os comandos abaixo

![image](https://github.com/user-attachments/assets/8d324304-e8ff-4af4-a1d5-9c7806e8bece)


<a id="deploy"></a>

## Como fazer o deploy

Para realizar o deploy, basta executar o seguinte comando:

```bash
npm run deploy
```

Esse comando irá executar o linting, o build e o deploy. Assim, somente o código mais atualizado irá subir para produção

<a id="good-practices"></a>

## Boas práticas do trabalho com git

Quando se trabalha em um repostiório de código compartilhado utilizando Git, existem algumas práticas que são interessante de se seguir. Segue uma lista do que sempre (ou quase sempre) deve ser feito antes de iniciar qualquer desenvolvimento.

1. Sempre que for realizar alguma alteração no código, crie uma nova branch a partir da main. Para fazer isso, siga os seguintes passos:
  - Execute o comando `git switch main` para garantir que você está na branch principal
  - Execute `git switch -c NOME_DA_SUA_BRANCH` para criar uma nova branch a partir da main
  - Faça todo o seu desenvolvimento. Então, quando quiser enviar as suas alterações para o GitHub, execute:
      ```bash
        git add .
        git commit -m "AQUI_VAI_UMA_MENSAGEM_DE_COMMIT_QUE_DESCREVA_DE_FORMA_CLARA_AS_SUAS_ALTERAÇÕES"
        git push origin ESCREVA_AQUI_O_NOME_DA_SUA_BRANCH
      ```
  - Vá até o seu GitHub, no repositório Frontend, e clique no botão verde de `Compare & Pull Request`.
    ![image](https://github.com/user-attachments/assets/9b05956b-95db-4415-abaf-c26ba14aee51)
  - Confira se a sua branch está na direita e na esquerda está a branch main
  - ![image](https://github.com/user-attachments/assets/7932559e-c057-4c96-8ddb-b67a07edf335)
  - Clique no botão de `Create Pull Request`
  - ![image](https://github.com/user-attachments/assets/43340389-3de9-481b-a979-e7b0619f09bd)
  - Ao fim, você chegará nesta tela. Não faça mais nada e avise alguém para revisar o código (pelo WhatsApp mesmo) e fazer o merge do seu código com a branch principal
    ![image](https://github.com/user-attachments/assets/4d4ec816-2ca8-4eb2-a2e0-1a980c7930b1)
2. Sempre que finalizar uma tarefa e for iniciar a próxima tarefa garanta que a sua branch main esteja atualizada e jamais crie novas branchs de desenvolvimento a partir de qualquer outra branch que não seja a main. Assim, após a criação do seu `Pull Request`, execute os seguintes passos:
    ```bash
      git switch main
      git pull origin main # Se tiver confiança, pode executar somente git pull
      # Aqui você pode criar sua nova branch de desenvolvimento normalmente e seguir trabalhando
    ```
3. Garanta que o seu código esteja funcionando antes de subir para o GitHub. Ou seja, teste o que você fez e garanta que não quebrou também o que já estava pronto anteriormente.

# Tasks

1. Adicionar Sistema de Recuperação de Senha
Código: TSK-101
Dificuldade: 5
Descrição: Implementar uma funcionalidade para recuperação de senha no sistema, utilizando o Firebase Authentication.
Dependências: Nenhuma.

2. Otimizar a Performance no Firebase Firestore
Código: TSK-102
Dificuldade: 8
Descrição: Implementar consultas otimizadas no Firestore para reduzir custos de leitura e melhorar a performance no carregamento de dados.
Dependências: Tarefa TSK-101 deve estar concluída para validação de acesso.

3. Desenvolver Tela de Perfil do Usuário
Código: TSK-103
Dificuldade: 13
Descrição: Criar uma página onde usuários possam visualizar e editar suas informações pessoais, com validação de permissões baseadas no papel (voluntário, jovem ou responsável).
Dependências: Tarefa TSK-101 concluída para garantir login funcional.

4. Implementar Funcionalidade de Importação/Exportação de Dados
Código: TSK-104
Dificuldade: 21
Descrição: Permitir que os chefes do grupo exportem dados em formato CSV e importem novos dados para atualizar registros, garantindo a conformidade com a LGPD.
Dependências: Tarefa TSK-103 para manipulação de dados do usuário.

5. Criar Página de Administração
Código: TSK-105
Dificuldade: 34
Descrição: Implementar uma interface de administração onde os chefes possam gerenciar os usuários, atualizar informações e acessar relatórios com filtros.
Dependências: Tarefa TSK-103 deve estar concluída.

6. Implementar Acessibilidade
Código: TSK-106
Dificuldade: 21
Descrição: Garantir que o site seja WCAG 2.1 AA compliant, com foco em acessibilidade para deficientes visuais e motores, incluindo suporte para leitores de tela e navegação por teclado.
Dependências: Nenhuma.

7. Criar Dashboard de Estatísticas
Código: TSK-107
Dificuldade: 34
Descrição: Desenvolver uma tela de dashboard para os chefes visualizarem estatísticas como número de voluntários, jovens, mudanças de endereço e outros dados relevantes.
Dependências: Tarefa TSK-105 deve estar concluída para garantir que os dados estejam acessíveis.

8. Implementar Integração com Redes Sociais
Código: TSK-108
Dificuldade: 8
Descrição: Criar botões de compartilhamento de conteúdo para redes sociais e permitir que usuários façam login utilizando Google ou Facebook.
Dependências: Nenhuma.

9. Criar Sistema de Notificações
Código: TSK-109
Dificuldade: 55
Descrição: Desenvolver um sistema de notificações em tempo real para alertar usuários sobre atualizações ou mudanças importantes, utilizando Firebase Cloud Messaging.
Dependências: Tarefa TSK-102 para configuração inicial e TSK-103 para atribuir notificações por tipo de usuário.

10. Implementar Sistema de Upload de Documentos
Código: TSK-110
Dificuldade: 34
Descrição: Permitir que os usuários façam upload de documentos importantes (como RG ou autorização), com suporte à verificação por parte dos administradores.
Dependências: Tarefa TSK-105 para que os administradores possam validar os documentos.

11. Adicionar Notificação de Atualização Disponível
Código: TSK-PWA-211
Dificuldade: 13
Descrição: Implementar uma notificação no frontend para alertar os usuários sobre a disponibilidade de uma nova versão do aplicativo, incentivando o refresh para atualização.
Dependências: Tarefa TSK-PWA-204 concluída.

12. Criar Funcionalidade de Download de Dados Offline
Código: TSK-PWA-212
Dificuldade: 21
Descrição: Permitir que administradores baixem relatórios em PDF ou CSV no modo offline, sincronizando o upload ou alterações automaticamente quando voltarem online.
Dependências: Tarefas TSK-PWA-203 e TSK-PWA-206.

13. Habilitar "Adicionar à Tela Inicial" com Personalização
Código: TSK-PWA-213
Dificuldade: 8
Descrição: Garantir que o PWA tenha uma experiência fluida para ser adicionado à tela inicial do dispositivo, com ícones personalizados e suporte ao tema configurado.
Dependências: Tarefa TSK-PWA-201 concluída.

14. Implementar Feedback Visual para Estado Offline
Código: TSK-PWA-214
Dificuldade: 13
Descrição: Adicionar uma barra ou indicador visual que informe aos usuários quando estão offline, com mensagens sobre o que podem ou não realizar nesse estado.
Dependências: Tarefa TSK-PWA-203 concluída.

15. Implementar Upload Progressivo de Imagens
Código: TSK-PWA-215
Dificuldade: 34
Descrição: Permitir que os usuários façam upload de fotos ou documentos mesmo offline, armazenando-os localmente e sincronizando automaticamente quando o dispositivo estiver online.
Dependências: Tarefas TSK-PWA-203 e TSK-PWA-206 concluídas.

16. Criar Funcionalidade de Notificações de Eventos Importantes
Código: TSK-PWA-216
Dificuldade: 34
Descrição: Configurar notificações push segmentadas para informar sobre mudanças de atividades, reuniões ou eventos importantes diretamente no PWA.
Dependências: Tarefa TSK-PWA-205 concluída.

17. Adicionar Suporte a Temas Escuro e Claro
Código: TSK-PWA-217
Dificuldade: 13
Descrição: Implementar a alternância entre tema claro e escuro com base nas configurações do sistema operacional ou escolha do usuário.
Dependências: Nenhuma.

18. Criar Suporte para Multilínguas no PWA
Código: TSK-PWA-218
Dificuldade: 21
Descrição: Adicionar suporte para múltiplos idiomas (por exemplo, português e inglês), garantindo que o PWA seja acessível para usuários de diferentes regiões.
Dependências: Nenhuma.

19. Implementar Sincronização de Configurações do Usuário DÁ PARA FAZER (MENOS A PARTE DE PREFERÊNCIA DE NOTIFICAÇÃO)
Código: TSK-PWA-219
Dificuldade: 21
Descrição: Permitir que as configurações personalizadas dos usuários (temas, preferências de notificação) sejam armazenadas no Firestore e sincronizadas em todos os dispositivos.
Dependências: Tarefa TSK-PWA-203 concluída.

20. Desenvolver Funcionalidade de Feedback no PWA
Código: TSK-PWA-220
Dificuldade: 8
Descrição: Criar uma funcionalidade que permita que os usuários enviem feedback sobre a experiência diretamente no PWA, mesmo offline.
Dependências: Tarefa TSK-PWA-203 para armazenamento de dados offline.

21. Implementar Integração com API de Previsão do Tempo
Código: TSK-API-221
Dificuldade: 8
Descrição: Conectar o sistema a uma API gratuita de previsão do tempo (como OpenWeatherMap) para exibir informações climáticas nas páginas de atividades ao ar livre.
Dependências: Nenhuma.

22. Integrar API de Geolocalização
Código: TSK-API-222
Dificuldade: 13
Descrição: Usar uma API como a Google Geocoding API para permitir que os usuários preencham automaticamente seus endereços ao digitar apenas o CEP.
Dependências: Nenhuma.

23. Criar Funcionalidade de Calendário com API do Google Calendar
Código: TSK-API-223
Dificuldade: 34
Descrição: Integrar o sistema com a API do Google Calendar para sincronizar eventos e atividades do grupo diretamente com o calendário dos usuários.
Dependências: Tarefas TSK-101 e TSK-105 para autenticação e administração.

24. Adicionar Integração com API de Redes Sociais
Código: TSK-API-224
Dificuldade: 21
Descrição: Usar APIs como a do Facebook ou Instagram para exibir publicações do grupo de escoteiros diretamente no site.
Dependências: Nenhuma.

25. Incorporar API de Mapas
Código: TSK-API-225
Dificuldade: 13
Descrição: Integrar uma API como a do Google Maps ou Leaflet para exibir a localização da sede do grupo e outros pontos de interesse.
Dependências: Nenhuma.

26. Implementar Integração com API de Notícias
Código: TSK-API-226
Dificuldade: 8
Descrição: Conectar o sistema a uma API de notícias gratuita, como a NewsAPI, para exibir artigos relacionados à inclusão social e atividades escoteiras.
Dependências: Nenhuma.

27. Criar Sistema de Tradução Automática
Código: TSK-API-227
Dificuldade: 21
Descrição: Usar uma API como a do Google Translate para traduzir textos do sistema em tempo real, permitindo maior acessibilidade para usuários estrangeiros.
Dependências: Tarefa TSK-PWA-218 para suporte a multilínguas.

28. Configurar API de Estatísticas de Acessos
Código: TSK-API-228
Dificuldade: 8
Descrição: Usar uma API como Google Analytics ou Matomo para monitorar estatísticas de acessos e entender o comportamento dos usuários.
Dependências: Nenhuma.

29. Integrar API de Doações Online
Código: TSK-API-229
Dificuldade: 34
Descrição: Conectar o sistema a uma API como PayPal Donations ou Stripe para permitir doações online ao grupo de escoteiros.
Dependências: Tarefa TSK-105 para gerenciamento de usuários.

30. Implementar Notificação de Alertas com API de Serviços Públicos
Código: TSK-API-230
Dificuldade: 13
Descrição: Usar uma API como Brasil.IO para exibir alertas de saúde pública, segurança ou outros assuntos importantes no site.
Dependências: Tarefa TSK-106 para acessibilidade.

31. Implementar Gráficos de Linhas e Barras com Recharts NÃO DÁ TEMPO DE FAZER
Código: TSK-VIS-231
Dificuldade: 13
Descrição: Usar a biblioteca Recharts para criar gráficos de linhas e barras que mostrem a evolução no número de cadastros de voluntários, jovens e responsáveis ao longo do tempo.
Dependências: Tarefa TSK-105 para acesso aos dados de administração.

32. Criar Painel de Dados com Tabelas Interativas usando React-Table
Código: TSK-VIS-232
Dificuldade: 8
Descrição: Usar React-Table para exibir relatórios de usuários cadastrados, com opções de busca, ordenação e filtros dinâmicos.
Dependências: Tarefa TSK-105.

33. Visualizar Atividades em Mapas com React-Leaflet
Código: TSK-VIS-233
Dificuldade: 21
Descrição: Usar a biblioteca React-Leaflet para exibir no mapa a distribuição de eventos e atividades escoteiras cadastradas na plataforma.
Dependências: Tarefa TSK-225 para integração de mapas.

34. Implementar Gráficos de Pizza para Dados de Participação
Código: TSK-VIS-234
Dificuldade: 8
Descrição: Usar Chart.js com o wrapper React react-chartjs-2 para exibir gráficos de pizza que mostrem a proporção de jovens, responsáveis e voluntários cadastrados.
Dependências: Tarefa TSK-VIS-231.

35. Criar Dashboards Responsivos com Ant Design
Código: TSK-VIS-235
Dificuldade: 13
Descrição: Usar Ant Design para criar um dashboard administrativo responsivo, integrando gráficos, tabelas e widgets em um único layout.
Dependências: Tarefa TSK-231.

36. Implementar Linha do Tempo de Atividades
Código: TSK-VIS-236
Dificuldade: 21
Descrição: Usar React-Vis Timeline para criar uma linha do tempo interativa mostrando eventos e mudanças no sistema, como novos cadastros ou atualizações de dados.
Dependências: Tarefa TSK-105 para acessar eventos do sistema.

37. Criar Relatórios Exportáveis em PDF com React-PDF
Código: TSK-VIS-237
Dificuldade: 13
Descrição: Usar React-PDF para permitir a exportação de relatórios administrativos diretamente em formato PDF.
Dependências: Tarefa TSK-VIS-232 para definir os relatórios.

38. Visualizar Indicadores de Progresso com React-Vis
Código: TSK-VIS-238
Dificuldade: 8
Descrição: Usar React-Vis para exibir indicadores visuais como barras de progresso ou medidores, destacando metas atingidas, como o número de novos membros cadastrados.
Dependências: Tarefa TSK-VIS-231.

39. Exibir Relatórios com Gráficos Dinâmicos em D3.js
Código: TSK-VIS-239
Dificuldade: 34
Descrição: Usar D3.js com React (via React-D3) para criar visualizações avançadas e dinâmicas, como gráficos animados e hierárquicos.
Dependências: Tarefa TSK-105 para coleta de dados administrativos.

40. Integrar Relatórios com Exportação para Excel usando SheetJS
Código: TSK-VIS-240
Dificuldade: 13
Descrição: Usar SheetJS para permitir que os administradores exportem tabelas e relatórios do sistema para arquivos Excel (.xlsx).
Dependências: Tarefa TSK-VIS-232 para configurar as tabelas.
