# 💇 Studio Belleza Cami - Sitio Web Profesional

Sitio web moderno y elegante para Studio Belleza Cami, un centro de peluquería y estética femenina. Aplicación React completamente funcional con diseño responsive y funcionalidades simuladas.

## 📋 Descripción

Aplicación web profesional desarrollada en React que presenta los servicios, permite realizar reservas, muestra la galería de trabajos y ofrece un chat de contacto. Todo funciona con estado local, perfecto para demostraciones profesionales.

## 🚀 Tecnologías

- **React 18.2.0** - Biblioteca principal
- **CSS3** - Estilos personalizados con variables CSS
- **React Hooks** - useState, useEffect para gestión de estado
- **LocalStorage** - Persistencia de datos (reservas y mensajes)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd peluqueria

# Instalar dependencias
npm install
```

## 🏃 Ejecución

```bash
# Iniciar servidor de desarrollo
npm start

# La aplicación se abrirá en http://localhost:3000
```

## 📁 Estructura del Proyecto

```
peluqueria/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js / Header.css
│   │   ├── Hero.js / Hero.css
│   │   ├── Servicios.js / Servicios.css
│   │   ├── Reservas.js / Reservas.css
│   │   ├── Galeria.js / Galeria.css
│   │   ├── SobreNosotros.js / SobreNosotros.css
│   │   ├── Chat.js / Chat.css
│   │   └── Footer.js / Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## ✨ Características

- ✅ **Header fijo** con navegación suave y menú responsive
- ✅ **Hero section** con llamadas a la acción
- ✅ **Catálogo de servicios** con 6 servicios detallados
- ✅ **Sistema de reservas** con formulario validado
- ✅ **Galería interactiva** con efecto hover
- ✅ **Sección "Sobre Nosotros"** con historia y valores
- ✅ **Chat flotante** con mensajes simulados
- ✅ **Footer completo** con información de contacto
- ✅ **Diseño 100% responsive** (móvil, tablet, desktop)
- ✅ **Animaciones suaves** y transiciones
- ✅ **Persistencia local** de reservas y mensajes

## 🎨 Identidad Visual

- **Nombre**: Studio Belleza Cami
- **Paleta de colores**:
  - Caldera: `#C76A35`
  - Arena: `#F3E7D3`
  - Verde: `#8CA89E`
  - Amarillo: `#F2D88C`
  - Blanco: `#FFFFFF`
- **Tipografía**: Poppins (Google Fonts)
- **Estilo**: Minimalista, elegante, femenino

## 📱 Responsive Design

La aplicación está completamente optimizada para:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🎯 Funcionalidades Simuladas

- **Reservas**: Se guardan en localStorage y se muestran en la sección de reservas
- **Chat**: Mensajes guardados localmente con respuesta automática simulada
- **Navegación**: Scroll suave entre secciones
- **Validación**: Formularios con validación en tiempo real

## 🚀 Build para Producción

```bash
# Crear build optimizado
npm run build

# Los archivos se generarán en la carpeta /build
```

## 📝 Notas

- Este es un proyecto de demostración sin backend real
- Todos los datos se almacenan en localStorage del navegador
- Las imágenes utilizan URLs de Unsplash (placeholder)
- Perfecto para portfolio profesional

## 📝 Licencia

Este proyecto es de uso privado.

---

**Estado del proyecto**: ✅ Completado y listo para demo
