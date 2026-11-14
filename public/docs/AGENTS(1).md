# AGENTS.md

## Visão geral

Website com tema do anime JoJo's Bizarre Adventure em que o usuário se cadastra, faz login, responde a um quiz ("Qual personagem de JoJo você é?"), vota no seu personagem favorito, avalia o site e vê os resultados em um dashboard com gráficos. O objetivo é coletar as respostas dos fãs em um banco de dados e mostrá-las de forma visual, sem planilhas ou contagem manual. Os usuários são fãs do anime, que cadastram, respondem ao quiz e votam, e o administrador, que analisa os dados.

O site também apresenta: quando surgiu o interesse pelo tema, quais valores pessoais o tema representa, a maior dificuldade no desenvolvimento e como o desafio foi superado.

Dashboard: personagens favoritos mais escolhidos, quantidade de usuários cadastrados e resultados do quiz.

## Tecnologias

Front-end

HTML5
CSS3 (só o básico: seletores simples, cores, fontes, margens, flexbox simples; nada avançado)
JavaScript
Chart.js

Back-end

Node.js
API web-data-viz

Banco de dados

MySQL

Ferramentas e serviços

Git e GitHub
opencode
Visual Studio Code

## Comandos

Instalar dependências: npm install
Rodar o servidor: npm start (ou node app.js, conferir o script no package.json)
Acessar no navegador: http://localhost:3333 (conferir a porta no .env)
Banco de dados: executar o database/script.sql no MySQL Workbench ou no terminal do MySQL.

## Arquitetura

O projeto segue o padrão web-data-viz: front-end separado do back-end, e o back-end dividido em rotas, controllers e models.

ESTRUTURA E RESPONSABILIDADES

app.js: sobe o servidor Express, carrega o .env, serve a pasta public e registra as rotas.
.env: configurações e credenciais (banco, porta).
database/: scripts SQL para criar o banco e as tabelas.
public/: telas HTML, CSS, JS do front (fetch e gráficos com Chart.js) e imagens do tema JoJo.
src/database/config.js: conexão com o MySQL.
src/routes/: define os endereços da API e liga cada um a um controller.
src/controllers/: recebe a requisição, valida os dados e chama o model.
src/models/: contém os comandos SQL, é a única camada que acessa o banco.

FLUXO DE UMA REQUISIÇÃO

Front (fetch) -> app.js -> Route -> Controller -> Model -> Banco. O retorno faz o caminho inverso até a tela.

COMO AS PASTAS SE RELACIONAM

O public só fala com a API por fetch. A route chama o controller, o controller chama o model e o model usa o config.js para acessar o banco.

COMO IMPLEMENTAR UMA FUNCIONALIDADE

Criar ou ajustar a tabela em database/script.sql.
Criar o model com o SQL (src/models).
Criar o controller com a validação (src/controllers).
Criar a route com os endereços (src/routes) e registrá-la no app.js.
Criar a tela em public/ e o JS que chama a API.
Testar o endpoint e depois a tela.

ONDE CRIAR NOVOS ARQUIVOS

Tela: public/. Estilo: public/css/. Script do front: public/js/. Imagens: public/imagens/. API: src/routes, src/controllers e src/models. Tabela: database/script.sql.

Regra prática: cada funcionalidade ganha uma route, um controller e um model com o mesmo nome, mais a tela e o JS no public.

FUNCIONALIDADES DO PROJETO

Cadastro e login: nome, email, senha e confirmar senha. A regra de senha (mais de 8 caracteres) é validada no JS do front.
Quiz de personalidade: as respostas definem qual personagem de JoJo combina com a pessoa; o resultado é salvo no banco.
Personagem favorito: o usuário vota em um personagem; os votos alimentam o dashboard.
Avaliação do site: o usuário avalia o site.
Dashboard: gráficos com Chart.js (personagens favoritos mais escolhidos, quantidade de usuários cadastrados).

## Padrões de desenvolvimento

VARIÁVEIS

Usar let.
Usar == e !== nas comparações.

NOMENCLATURA

Arquivos: minúsculos, sem acentos nem espaços (ex.: dashboard.html). JS do back-end em camelCase com o sufixo da camada (ex.: quizController.js, quizModel.js).
Variáveis e funções: camelCase (ex.: salvarResposta).
Constantes fixas: MAIUSCULAS_COM_UNDERLINE.
Tabelas e colunas do banco: minúsculas com underline (ex.: resultado_quiz).
IDs e classes no HTML/CSS: minúsculas com hífen (ex.: btn-enviar).

ORGANIZAÇÃO E SEGURANÇA

SQL só no model, validação no controller, endereços na route.
Indentação de 2 espaços e uso de ponto e vírgula.
Consultas SQL parametrizadas.

COMMITS

Em português, no imperativo, no formato tipo: descrição.
Tipos: feat, fix, style, refactor e docs.
Exemplos: feat: adiciona cadastro de usuário / fix: corrige validação do e-mail.
Commits pequenos, um por funcionalidade, com push ao final de cada etapa.

## Cuidados e restrições

NÃO FAZER

Não enviar o .env para o GitHub.
Não montar SQL concatenando texto; usar consultas parametrizadas.
Não instalar bibliotecas novas sem avisar.
Não trocar a stack nem usar frameworks de front-end.
Não usar CSS avançado (animações complexas, grid elaborado, variáveis CSS, pré-processadores); manter o CSS básico, no nível ensinado em aula.
Não apagar, renomear ou mover arquivos sem avisar.
Não fazer push nem mexer no histórico do Git sem eu pedir.
Não usar imagens ou textos do tema Breaking Bad; o tema do projeto é JoJo.

ATENÇÃO ANTES DE ALTERAR

Ler a estrutura do projeto antes de criar arquivos.
Mostrar o plano e esperar minha confirmação antes de implementar.
Mostrar o script antes de alterar o banco; nunca rodar DROP, DELETE ou TRUNCATE sem confirmação.
Avisar antes de mexer em app.js, config.js e package.json.
Explicar a causa dos erros em vez de só corrigir.
Dizer como testar cada mudança.

## Regra geral

Antes de implementar qualquer alteração, siga as tecnologias, a arquitetura, as convenções e as restrições descritas neste documento.

Se alguma informação estiver ausente, analise o código existente e siga os padrões já adotados no projeto.

Em caso de dúvida ou conflito entre este documento e o código existente, pare e pergunte antes de alterar.
