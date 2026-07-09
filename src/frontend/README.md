# Phoenix Frontend

Protótipo funcional do Phoenix Web App - Next.js + TypeScript.

## Comandos

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento (porta 5000)
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start
```

## Onde vivem os dados

| Arquivo | Conteúdo |
|---|---|
| `src/lib/mock/exercises.ts` | Catálogo inicial com 27 exercícios globais e UUIDs estáveis |
| `src/lib/mock/templates.ts` | 7 templates de treino derivados dos docs de treinamento |
| `src/lib/adapters/exercises.ts` | Funções de adaptador (todas retornam `Promise`) — ponto de integração com o backend real |
| `src/lib/types.ts` | Tipos TypeScript que espelham o contrato backend/OpenSpec |
| `src/lib/labels.ts` | Labels em português para os valores enum |

Exercícios privados criados pelo atleta são salvos em `localStorage` sob a chave
`phoenix_private_exercises`. Exercícios globais criados pelo admin (na sessão atual)
ficam em memória e somem ao recarregar.

## Telas implementadas

| Tela | Rota | Status |
|---|---|---|
| Dashboard | `/dashboard` | Preview com dados simulados |
| Biblioteca de Exercícios | `/biblioteca` | **Funcional** — busca, filtros, detalhes, criar/editar/desativar privados |
| Templates de Treino | `/treinos` | Preview de leitura — todos os templates reais |
| Workout Player | `/player` | Preview interativo — registra séries, timer placeholder |
| Histórico | `/historico` | Preview com dados simulados |
| Admin | `/admin` | Funcional — catálogo global, criar exercício (memória de sessão) |

## O que é intencionalmente mock

- **Autenticação**: usuário fixo simulado; role switcher dev-only no sidebar
- **Persistência de histórico**: player registra séries em estado local, sem salvar
- **Dashboard**: estatísticas hardcoded
- **Admin write**: novos exercícios globais criados pelo admin ficam na memória da
  sessão (não persistem no reload)
- **Workout player**: timer de descanso é um placeholder estático

## Integração com o backend

O frontend deve chamar o backend por URLs relativas em `/api/...`. Em
desenvolvimento local, `next.config.ts` reescreve `/api/:path*` para
`PHOENIX_API_ORIGIN`, com padrão `http://localhost:8080`.

Para conectar ao backend real, substitua as funções em `src/lib/adapters/exercises.ts`
por chamadas `fetch` para a API Spring Boot. A assinatura das funções não muda:

```ts
// Antes (mock)
export async function listExercises(filters) { ... }

// Depois (real)
export async function listExercises(filters) {
  const params = new URLSearchParams({ ... });
  const res = await fetch(`/api/exercises?${params}`);
  return res.json();
}
```

## Stack

- **Next.js 16** - App Router
- **TypeScript** - strict mode
- **CSS puro** - variáveis globais em `globals.css`, sem framework CSS
- **PWA-ready** - estrutura preparada; manifest a adicionar

## Papéis disponíveis (dev)

| Papel | Comportamento |
|---|---|
| `ATHLETE` | Vê e filtra exercícios globais + próprios privados; pode criar, editar e desativar os seus |
| `ADMIN` | Acessa a seção Admin; vê catálogo global; pode criar exercícios globais |

Use o seletor "Papel" no rodapé do sidebar para alternar.
