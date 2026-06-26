# 🌎 Voratravel — Agencia de Viajes Internacional

Plataforma web completa para **Voratravel**, agencia de viajes internacional especializada en turismo hacia Costa Rica y viajes al exterior desde Costa Rica.

---

## 🏗️ Arquitectura del Proyecto (Monorepo)

```
voratravelproject/
├── frontend/          ← Next.js 14 + Tailwind CSS + next-intl (ES/EN)
├── backend/           ← NestJS + Prisma + PostgreSQL
├── frontend/docs/     ← Documentacion comercial y de diseno
└── package.json       ← Workspace root
```

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| i18n | next-intl (Español + Inglés) |
| Backend | NestJS 10, TypeScript |
| ORM | Prisma 5 |
| Base de datos | PostgreSQL (DigitalOcean) |
| Auth | JWT + Passport |
| Docs API | Swagger (OpenAPI) |

---

## 🎨 Paleta de Colores (del Logo)

| Color | HEX | Uso |
|-------|-----|-----|
| Navy | `#1B2D4F` | Color principal, encabezados |
| Gold | `#C8841E` | Acentos, CTAs, badges |
| Gold Light | `#E8A020` | Hover states |
| Cream | `#FDF8F0` | Fondos suaves |
| White | `#FFFFFF` | Texto sobre oscuro |

---

## 📄 Páginas

### Frontend
| Ruta ES | Ruta EN | Descripción |
|---------|---------|-------------|
| `/es` | `/en` | Home — Hero, Tours destacados, Destinos |
| `/es/tours` | `/en/tours` | Listado de todos los tours |
| `/es/tours/[slug]` | `/en/tours/[slug]` | Detalle completo del tour + itinerario |
| `/es/seguros` | `/en/insurance` | Planes de seguro de viaje |
| `/es/nosotros` | `/en/about` | Sobre Voratravel |
| `/es/contacto` | `/en/contact` | Formulario de contacto |

### Backend API (Base: `/api/v1`)
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/tours` | Listar tours activos |
| GET | `/tours/:slug` | Tour por slug |
| POST | `/tours` | Crear tour (Admin) |
| PATCH | `/tours/:id` | Actualizar tour (Admin) |
| GET | `/insurance` | Planes de seguro |
| POST | `/bookings` | Crear reserva |
| GET | `/bookings` | Listar reservas (Admin) |
| POST | `/contact` | Enviar consulta |
| POST | `/auth/register` | Registro |
| POST | `/auth/login` | Login JWT |

---

## 🚀 Primeros Pasos

### 1. Instalar dependencias
```bash
# Frontend
cd frontend && npm install

# Backend
cd backend && npm install
```

### 2. Configurar variables de entorno
```bash
# Backend
cp backend/.env.example backend/.env
# → Editar DATABASE_URL con credenciales de DigitalOcean PostgreSQL

# Frontend
cp frontend/.env.local.example frontend/.env.local
# → Opcional: NEXT_PUBLIC_WHATSAPP_NUMBER (ej: 50670484949)
```

### 3. Migrar base de datos
```bash
cd backend
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Correr en desarrollo
```bash
# Terminal 1 — Frontend (http://localhost:3000)
cd frontend && npm run dev

# Terminal 2 — Backend (http://localhost:3001)
cd backend && npm run start:dev
```

### 5. Swagger Docs
Abrir: http://localhost:3001/api/docs

---

## ✈️ Tours Actuales

### 🏰 Europa
- **Ruta Imperial y Alpes Europeos** — Madrid, Roma, Milán, Suiza, Viena y Eslovenia — **15 días** — desde **$4,850 USD**

Nota: el frontend renderiza tours de forma dinamica desde los tours publicados.

---

## 🔒 Seguridad
- Rate limiting en endpoints públicos (Throttler)
- Validación con `class-validator` en todos los DTOs
- Passwords hasheadas con bcrypt (salt rounds: 12)
- JWT con expiración configurable
- CORS configurado para el dominio del frontend
- Input sanitization vía ValidationPipe (`whitelist: true`)

---

## 📦 Próximos Pasos
- [ ] Pasarela de pago (Stripe / PayCash CR)
- [ ] Panel de administración (Next.js Admin)
- [ ] Emails transaccionales (Resend / SendGrid)
- [ ] Galería de imágenes real (Cloudinary)
- [ ] Sistema de reseñas verificadas
- [ ] Integración WhatsApp Business API
- [ ] SEO avanzado + sitemap.xml
- [ ] Despliegue en Vercel (frontend) + DigitalOcean App Platform (backend)
