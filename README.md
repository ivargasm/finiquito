# Cálculo de Finiquito en México

Este proyecto es una aplicación web desarrollada con **React**, **Tailwind CSS** y **Zustand** que permite calcular el finiquito de un trabajador en México de manera aproximada. La aplicación es responsiva y permite cambiar entre modo claro y oscuro.

## Características
- Cálculo automático del finiquito con base en los días trabajados y el sueldo diario.
- Parámetros modificables como los días de aguinaldo y vacaciones.
- Modo oscuro y claro.
- Diseño responsivo.
- Descargo de responsabilidad indicando que es un cálculo aproximado.

## Tecnologías utilizadas
- **React** (sin frameworks adicionales)
- **Tailwind CSS** (para estilos)
- **Zustand** (para la gestión del estado)

## Instalación y uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/finiquito.git
   cd finiquito
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre en tu navegador:
   ```
   http://localhost:5173
   ```
   *(Dependiendo de tu configuración, la URL puede variar.)*

## Estructura del proyecto
```
/
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── store/        # Gestión de estado con Zustand
│   ├── App.jsx       # Componente principal
│   ├── main.jsx      # Punto de entrada de React
│
├── public/           # Archivos estáticos
├── index.html        # HTML principal
├── tailwind.config.js # Configuración de Tailwind
├── package.json      # Dependencias y scripts
└── README.md         # Documentación del proyecto
```

## Cálculo del Finiquito
El cálculo del finiquito se basa en las siguientes fórmulas:

### **Aguinaldo**
```
Factor para aguinaldo = días_de_aguinaldo / 365
Parte proporcional de aguinaldo = Factor para aguinaldo * días_trabajados * sueldo_diario
```

### **Vacaciones**
```
Factor de vacaciones = días_de_vacaciones / 365
Parte proporcional de vacaciones = Factor de vacaciones * días_trabajados * sueldo_diario
```

### **Prima Vacacional (25%)**
```
Prima vacacional = Parte proporcional de vacaciones / 4
```

### **Dias pendientes de pago**
```
diasPendietes = diasPendietes de pago * dueldo_diario
```

### **Total del Finiquito**
```
Finiquito = Parte proporcional de aguinaldo + Parte proporcional de vacaciones + Prima vacacional + dias_pendientes
```

## Descargo de Responsabilidad
**Esta calculadora proporciona estimaciones basadas en los datos ingresados y las fórmulas de cálculo estándar. Los resultados son meramente informativos y no constituyen asesoría legal. Para casos específicos o disputas legales, recomendamos consultar con un profesional en derecho laboral. El creador de esta aplicación no se hace responsable por el uso que se dé a la información aquí proporcionada.**

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, haz un **fork** del repositorio, crea una nueva rama y envía un **pull request**.

## Licencia
Este proyecto se distribuye bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

---

🚀 ¡Esperamos que esta aplicación te sea de utilidad!