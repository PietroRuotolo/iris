# iris

Protótipo de interface para **acompanhamento médico de pacientes com doenças neurodegenerativas**, com base em monitoramento comportamental passivo.

O app é voltado para o **médico**, que acompanha vários pacientes a distância. A partir de sinais comportamentais coletados no dia a dia (tempo de resposta a notificações, velocidade de digitação, tempo para localizar um aplicativo, buscas repetidas), o sistema calcula um *score comportamental* e sinaliza desvios que possam indicar alteração cognitiva — apoiando a triagem e o acompanhamento contínuo.

> **Status:** protótipo de front-end. Os dados exibidos são simulados (*mock*), servindo para validar a interface antes da integração com o back-end.

---

## Telas

- **Login do médico** (`/login`) — autenticação do médico. Cada médico é identificado no banco de dados, o que permite vincular e exibir apenas os pacientes sob sua responsabilidade.
- **Lista de pacientes** (`/`) — visão de entrada após o login, com todos os pacientes acompanhados pelo médico e seu status atual (estável / atenção).
- **Detalhe do paciente** (`/paciente/:id`) — visão completa de um paciente:
  - Score comportamental do dia
  - Métricas do dia (resposta a notificações, velocidade de digitação, tempo para achar app, buscas repetidas)
  - Tendência do score nos últimos 7 dias
  - Observação clínica automática sobre o padrão do paciente

---

## Tecnologias

- **React 19** — biblioteca de interface
- **Vite** — bundler e servidor de desenvolvimento
- **Tailwind CSS v4** — estilização utilitária (configurada via plugin do Vite)
- **React Router** — navegação entre telas
- **Recharts** — gráficos
- **lucide-react** — ícones

---

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org/) 18 ou superior instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo de desenvolvimento
npm run dev
```

O terminal vai exibir um endereço local (geralmente `http://localhost:5173`) — abra no navegador.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # pré-visualiza a versão de produção localmente
```

---

## Estrutura de pastas

```
src/
├── components/        # componentes reutilizáveis
│   ├── ScoreRing.jsx      # anel de progresso do score
│   ├── MetricCard.jsx     # card de uma métrica do dia
│   └── TrendChart.jsx     # gráfico de tendência (7 dias)
├── pages/             # telas completas
│   ├── PatientList.jsx    # lista de pacientes (entrada)
│   └── PatientDetail.jsx  # detalhe de um paciente
├── services/          # dados e (futuramente) chamadas de API
│   └── pacientes.js       # dados simulados dos pacientes
├── App.jsx            # rotas do aplicativo
├── main.jsx           # ponto de entrada do React
└── index.css          # tema (cores e fontes) e import do Tailwind
```

---

## Integração com o back-end (próximos passos)

Hoje os dados vêm do arquivo `src/services/pacientes.js`. Quando o back-end estiver pronto, esse arquivo é o ponto de troca: as telas passam a buscar os dados de uma API (por exemplo, `GET /pacientes` e `GET /pacientes/:id`) em vez da lista fixa, sem precisar reescrever os componentes.

O login do médico se conecta a esse mesmo back-end: a autenticação identifica o médico no banco de dados e determina quais pacientes serão retornados para ele.
