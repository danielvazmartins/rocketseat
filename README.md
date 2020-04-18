# Rocketseat

## Stack Utilizada
- Backend (NodeJS)
    - Framework: Express
    - Middleware de Logs: Morgan
    - Banco de Dados: SqlLite
    - Acesso ao banco de dados: Knex (SQL Query Builder)
    - Validação de parâmetros das rotas: Celebrate e Joi
    - Testes automatizados: Jest
- Frontend (React)
    - Componente de ícones: react-icons (Feather)
- Mobile (React Native)
    - Expo: Ferramenta para criar e fazer odeploy do projeto

## Knex
```bash
# Instalar o pacote global para utilizar a CLI
npm i -g knex
# Cria o arquivo de configuração knexfile.js
knex init
# Criar arquivos de migrations (estrutura do banco de dados)
knex migrate:make create_ongs
knek migrate:make create_incidents
# Executar as migrations
knex migrate:latest
```

## Fontes
- Knex.JS (http://knexjs.org/)
- Celebrate (https://github.com/arb/celebrate)
- Feather Icons (https://feathericons.com/)