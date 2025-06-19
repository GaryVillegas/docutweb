# ✂️ DocutWeb

Sistema completo de agendamiento para peluquerías y tiendas de estética, compuesto por:

- 📱 **App móvil**: permite a los clientes ver servicios, horarios disponibles y agendar citas.
- 💻 **Dashboard web**: permite al personal gestionar citas, clientes, servicios y ver reportes.

---

## 📌 Tabla de Contenidos

- [Características](#-características)
- [Arquitectura](#-arquitectura)
- [Instalación](#-instalación)
  - [Backend/API](#backendapi)
  - [Dashboard Web](#dashboard-web)
  - [App Móvil](#app-móvil)

---

## 💡 Características

- **App móvil (cliente)**

  - Registro e inicio de sesión
  - Visualización de servicios disponibles (cortes, tratamientos, depilación…)
  - Calendario con horarios disponibles
  - Creación de citas con confirmación automática
  - Gestión de perfil de usuario

- **Dashboard web (personal)**
  - Calendario y lista de citas
  - Gestión de servicios (CRUD)
  - Configuración de horarios de atención
  - Confirmación, cancelación y reasignación de citas
  - Gestión de clientes
  - Reportes básicos (citas por día, servicio, cliente)

---

## 🏛️ Arquitectura

- **Backend/API**: NextJS con SKD transbank para transacciones
- **Base de datos**: Firestore por firebase
- **App móvil**: Ionic Angular
- **Dashboard web**: React o Vue.js con Antd y bootstrap

---

## 🚀 Instalación

Asegúrate de tener Node.js y git.

### Proyecto

```bash
npm install
npm run dev
```
