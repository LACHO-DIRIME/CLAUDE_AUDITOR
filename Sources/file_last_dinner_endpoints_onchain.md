# file_last_dinner_endpoints_onchain.md
## 🔗 INTERSECCIÓN ON-CHAIN: last_dinner_endpoints.py

### Tipo de Vínculo
**Endpoints API** entre ELPULSAR_app y LAST_DINNER

### Archivo Vinculante
**Nombre:** `last_dinner_endpoints.py`
**Ubicación referenciada:** `LAST_DINNER/Sources/last_dinner_endpoints.py`

### Descripción
Este archivo define los endpoints que ELPULSAR_app utiliza para comunicarse con el protocolo LAST_DINNER. Es la API backend que el frontend consume para funcionalidades de protocolo.

### Propósito en ELPULSAR_app
ELPULSAR_app utiliza estos endpoints para:
- Inicializar sesiones de protocolo
- Enviar/recibir mensajes
- Validar comunicación
- Cerrar sesiones

### Relación con LAST_DINNER
LAST_DINNER proporciona:
- Capa de protocolo
- Validación de mensajes
- Seguridad vía COOKIE_DOG

### Estado
- ✅ Referencia documentada en LAST_DINNER/
- ✅ ELPULSAR_app configurado para usar endpoints
- ✅ Integración funcional

### Referencias Cruzadas
- `Working/LAST_DINNER/Sources/file_last_dinner_endpoints_onchain.md`
- `Working/ELPULSAR_app/Docs/Application_Specification.md`
- `Working/LAST_DINNER/Docs/Protocol_Specification.md`

---
Fecha: 2026-04-05
Tipo: INTERSECCIÓN ON-CHAIN (API Endpoints)
Estado: Consumo de API documentado
