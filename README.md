# Eliane Fashion - Template Netlify

Template completo para loja virtual com:
- Netlify Functions
- Firebase (Auth + Firestore)
- Mercado Pago
- Instagram Feed
- PWA
- Painel Admin

## O que está realmente pronto

- `index.html` e `styles.css`: **prévia visual responsiva**, sem formulário ou pagamento. Pode ser publicada para revisão estética.
- `netlify.toml`: hospedagem da prévia estática, com política CSP e sem pasta de Netlify Functions ativa.
- Os arquivos legados `functions*.js.js`, `adminindex.html.html` e `sw.js.js` permanecem apenas como **referências não homologadas** e não são copiados para rotas de funções da Netlify. **Não renomeie ou publique esses endpoints sem implementar autenticação, validação de estoque/preço no servidor e webhooks de pagamento.**
- O `manifest.json` original referencia ícones ausentes, portanto a prévia **não anuncia instalação PWA**.

Validação local: `npm test` (Node 24). Para testar a página estática use `python -m http.server 8000`; para a versão Netlify, configure o deploy do repositório sem integrar serviços reais.

### Bloqueadores antes de vender

O código demonstrativo de atualização de estoque não verifica autorização, e o código demonstrativo de pagamentos aceita preços enviados pelo navegador. Ambos devem ser substituídos e auditados antes de expor funções publicamente. Configure Firebase e Mercado Pago apenas em ambiente de teste primeiro.

## Deploy rápido

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/pabloguilherme1121/elianefashion-netlify-template)

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `MP_ACCESS_TOKEN` | Token do Mercado Pago |
| `FIREBASE_PROJECT_ID` | ID do projeto Firebase |
| `FIREBASE_CLIENT_EMAIL` | E-mail da conta de serviço |
| `FIREBASE_PRIVATE_KEY` | Chave privada do Firebase |
| `ADMIN_UID` | UID do usuário admin |
| `URL_BASE` | URL do site |
| `INSTAGRAM_TOKEN` | Token do Instagram (opcional) |

## Estado e navegação

Este repositório é um template que exige configuração; não representa uma loja em produção. As integrações de autenticação, estoque e pagamento precisam ser verificadas antes de receber clientes.

Os arquivos recebidos têm extensões duplicadas (`index.html.html`, `netlify.toml.txt`, `functions*.js.js`) e as funções ainda não estão na pasta `functions` indicada pela configuração. O botão de deploy copia o projeto, mas não corrige essa estrutura automaticamente. Prepare os nomes e caminhos, configure as variáveis no provedor e valide o ambiente de testes do pagamento antes de publicar.

- [Central de projetos de Pablo Guilherme](https://pabloguilherme1121.github.io/PG-portfolio/#rede-projetos)
- [PG Arcade](https://pabloguilherme1121.github.io/PG-Arcade/#/)
- [Eleições Goiás 2026](https://pabloguilherme1121.github.io/eleicoes-goias-2026/)
- [Observatório de Águas Lindas](https://pabloguilherme01.github.io/observatorio/#dashboard)
