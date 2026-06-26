# Patrón de Precio en Páginas de Tours

## ✅ Tours con precio implementado
- **Europa 2026** (`/europe-2026`)
- **Escocia 2026** (`/scotland-2026`)

## 📋 Cómo agregar precio a un nuevo tour

### 1. Asegúrate que el tour tenga precio en data.ts
```typescript
{
  id: 'tour-XXX',
  slug: 'nombre-tour',
  price: 2950, // ⚠️ Debe tener precio > 0
  // ...resto de campos
}
```

### 2. Agrega el badge de precio en el hero section

**Ubicación:** Justo después del subtítulo y **antes** del bloque de botones (CTAs).

**Código a agregar:**
```tsx
<div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
  <span className="text-sm font-medium text-white/80">{isEs ? 'Desde' : 'From'}</span>
  <span className="text-3xl font-bold text-[#D6AE5C]">$2,950</span>
  <span className="text-sm text-white/70">USD / {isEs ? 'persona' : 'person'}</span>
</div>
```

**Estructura completa del hero:**
```tsx
<div className="max-w-4xl pb-3 text-white">
  {/* Título */}
  <h1 className="font-display text-4xl font-bold...">
    {isEs ? 'TÍTULO ESPAÑOL' : 'ENGLISH TITLE'}
  </h1>
  
  {/* Subtítulo */}
  <p className="mt-5 text-base...">
    {isEs ? 'Subtítulo español' : 'English subtitle'}
  </p>
  
  {/* ⚠️ AQUÍ VA EL PRECIO - mt-6 */}
  <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
    <span className="text-sm font-medium text-white/80">{isEs ? 'Desde' : 'From'}</span>
    <span className="text-3xl font-bold text-[#D6AE5C]">$X,XXX</span>
    <span className="text-sm text-white/70">USD / {isEs ? 'persona' : 'person'}</span>
  </div>
  
  {/* Botones CTA - mt-7 */}
  <div className="mt-7 flex flex-wrap items-center gap-3">
    <HeroCtaModal ... />
    <a href={reserveNowWhatsApp} ...>
      {isEs ? 'Reserva $500.00' : 'Reserve $500.00'}
    </a>
  </div>
</div>
```

## 🎨 Estilos y colores
- **Fondo:** `bg-white/10` con `backdrop-blur-sm` (efecto glassmorphism)
- **Borde:** `border-white/20` (borde sutil)
- **Precio:** `text-[#D6AE5C]` (dorado de la marca)
- **Texto secundario:** `text-white/80` y `text-white/70` (opacidad para jerarquía)

## 🚫 Tours sin precio (Coming Soon)
Para tours "Coming Soon" que aún no tienen precio definido (`price: 0`), **NO agregues el badge de precio**. Estos tours deben mantener su diseño actual con badges de "Próximamente" o "Coming Soon".

Ejemplos:
- Gran Ruta Mediterranea (madrid-turquia-egipto-grecia)
- Ruta Colonial Mexica (actualmente sin precio confirmado)

## 🌍 Organización del menú por regiones
El header está configurado para agrupar tours automáticamente por región:

**Regiones disponibles en `data.ts`:**
- `region: 'europe'` → Aparece bajo "Europa" / "Europe"
- `region: 'other'` → Aparece bajo "América" / "Americas"
- `travelType: 'national-cr'` → Aparece bajo "Costa Rica"

**Para agregar una nueva región:**
1. Define el valor en `tour.region` (ej: `'asia'`, `'oceania'`)
2. Agrega filtro en `Navbar.tsx`: `const asiaTours = publishedTours.filter((tour) => tour.region === 'asia')`
3. Agrega el nombre en `regionNames`:
   ```typescript
   const regionNames = {
     es: { europe: 'Europa', america: 'América', asia: 'Asia', ... },
     en: { europe: 'Europe', america: 'Americas', asia: 'Asia', ... },
   }
   ```
4. Agrega la sección en el dropdown (copia el patrón de Europa o América)

---

**Última actualización:** 2026-06-25
