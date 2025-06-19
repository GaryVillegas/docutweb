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

## 📋 KPI Mensuales

### ✅ 1. Total de citas agendadas

**¿Qué Mide?**
Total de citas agendadas en el mes.
**Formula**
**Total de citas del mes** = cantidad de citas con fecha dentro del mes

### ❌ 2. Porcentaje de cancelaciones

**¿Qué Mide?**
Qué porcentaje de las citas agendadas fueron canceladas.
**Formula**
**Tasa de cancelación (%)** = (Citas canceladas ÷ Total de citas) × 100
**Ejemplo:**

```
Total de citas del mes = 130
Citas canceladas = 20
Tasa de cancelación = (20 ÷ 130) × 100 = 15,38 %
```

### 💰 3. Ingreso mensual estimado

**¿Qué Mide?**
El dinero total que se generó por las citas realizadas en el mes.
**Formular**
**Ingreso del mes** = suma de los precios de todas las citas realizadas
**Ejemplo:**

```
20 citas a $10.000 = $200.000
30 citas a $15.000 = $450.000
30 citas a $12.000 = $360.000
Ingreso total = $200.000 + $450.000 + $360.000 = $1.010.000 CLP
```
