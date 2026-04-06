# Application Specification
## ELPULSAR_app (elpulsar.app) - Especificación Técnica

### Versión
Application Version: 0.6.0
Fecha: 2026-04-05
Estado: Production Ready

### Descripción
Aplicación web principal del ecosistema elpulsar.app. Interfaz de usuario para interactuar con el motor DIRIME/IMV y los protocolos LAST_DINNER.

### Estructura

#### 1. index.html
**Ubicación:** `Working/ELPULSAR_app/Sources/index.html`
**Tamaño:** 43KB
**Función:** Single Page Application (SPA) principal
**Características:**
- UI responsiva
- Soporte multi-idioma (i18n)
- Integración con API de DIRIME
- Visualización de resultados IMV

#### 2. assets/
**Ubicación:** `Working/ELPULSAR_app/Sources/assets/`
**Contenido:**
- Imágenes y recursos gráficos
- Fuentes tipográficas
- Archivos CSS/JS complementarios

#### 3. i18n/
**Ubicación:** `Working/ELPULSAR_app/Sources/i18n/`
**Contenido:**
- Traducciones en múltiples idiomas
- Archivos de localización
- Configuración regional

#### 4. DEPLOYMENT/
**Ubicación:** `Working/ELPULSAR_app/Sources/DEPLOYMENT/`
**Contenido:**
- Configuraciones de despliegue
- Scripts de deploy
- Archivos de infraestructura

### Integración Backend

#### Conexión con DIRIME/IMV
```
Frontend (ELPULSAR_app)
    ↓ HTTP/WebSocket
API Layer (cloudflare workers / api/)
    ↓
DIRIME/IMV (Motor de procesamiento)
    ↓
Resultados → Frontend
```

#### Protocolos Soportados
- LAST_DINNER - Comunicación sesiones
- COOKIE_DOG - Validación de seguridad
- LACHO - Procesamiento de lenguaje

### Deployments Soportados

#### 1. Cloudflare Workers
- **Config:** `DEPLOY/cloudflare/`
- **Entry:** `worker.js`

#### 2. Vercel
- **Config:** `vercel.json` (raíz)
- **Dominio:** elpulsar-app

#### 3. GitHub Pages
- **Origen:** `docs/` (raíz)
- **Branch:** gh-pages

#### 4. Heroku
- **Config:** `Procfile`
- **Workers:** `agents/corpus_indexer/agent.py`

### Dependencias Frontend
- HTML5/CSS3/JavaScript vanilla
- Sin frameworks pesados (LOW_RAM Protocol)
- Optimizado para dispositivos de bajos recursos

### Uso
1. Acceder a `https://elpulsar.app`
2. Iniciar sesión (validación COOKIE_DOG)
3. Interactuar con DIRIME/IMV a través de la UI
4. Visualizar resultados en tiempo real

### Mantenimiento
- Actualizaciones vía `make deploy`
- Monitoreo con `DEPLOY/scripts/health_check.sh`
- Backups automáticos en `snapshots/`

---
Fecha: 2026-04-05
Versión: 0.6.0
Estado: Documentación de aplicación completa
