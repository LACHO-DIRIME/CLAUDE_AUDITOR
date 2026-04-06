# elpulsar.app - Deploy Guide

Aplicación soberana con Cloudflare Workers + Pages

## Estructura del Proyecto

```
elpulsar.app/
├── worker.js              # Backend API (Cloudflare Worker)
├── wrangler.toml          # Configuración Workers/Pages
├── package.json           # Dependencias npm
├── dist/                  # Build estático para Pages
│   └── index.html
├── Sources/               # Código fuente original
│   └── index.html
└── Docs/                  # Documentación
```

## Endpoints API

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/scalar` | GET | Métricas Scalar S (0.907 actual) |
| `/api/notaria` | GET/POST | Actos notariales |
| `/health` | GET | Health check |
| `/api/corpus` | GET | Corpus index |
| `/api/agents` | GET | Agent sessions |
| `/api/mcp` | GET/POST | MCP registry |

## Deploy Paso a Paso

### 1. Instalar Wrangler CLI

```bash
npm install -g wrangler
```

### 2. Autenticar con Cloudflare

```bash
wrangler login
```

### 3. Crear Proyecto Pages

```bash
wrangler pages project create elpulsar
```

### 4. Configurar Secrets

```bash
# En Cloudflare Dashboard o via CLI:
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_KEY
wrangler secret put MCP_TOKEN
```

### 5. Deploy Worker

```bash
wrangler deploy
```

### 6. Deploy Pages

```bash
npm run build
wrangler pages deploy dist --project-name=elpulsar
```

## GitHub Actions (Automático)

Push a `main` ejecuta:
1. Tests
2. Deploy Worker
3. Deploy Pages

Secrets necesarios en GitHub:
- `CF_API_TOKEN`
- `CF_ACCOUNT_ID`
- `SUPABASE_URL`
- `SUPABASE_KEY`
- `MCP_TOKEN`

## DNS Configuración

```
A     @        → 76.76.21.21
CNAME www      → cname.vercel-dns.com
CNAME api      → elpulsar-api.workers.dev
```

## Estado Actual

✅ Worker.js: 9,899 bytes - 6 endpoints configurados
✅ Wrangler.toml: Configuración completa
✅ Package.json: Scripts de deploy listos
✅ Dist/: Build estático preparado
✅ Scalar S: 0.907 (óptimo)

## Comandos Útiles

```bash
# Desarrollo local
wrangler dev

# Deploy manual
make deploy

# Ver logs
wrangler tail

# Ver secrets
wrangler secret list
```

## Licencia

MIT - LACHO-DIRIME 2026
