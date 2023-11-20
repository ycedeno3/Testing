# Automation workflow status
[![Cypress Execution (API Testing / UI Automation)](https://github.com/ycedeno3/Testing/actions/workflows/cypress.yml/badge.svg)](https://github.com/ycedeno3/Testing/actions/workflows/cypress.yml)

# Pre-requisitos para ejecución de automatización✅

* Instalar node (https://nodejs.org/en/)

# Cómo levantar la interfaz de Cypress 🤔

* npm install
* npx cypress open
* Apretar E2E Testing para la ejecución de los tests.

# Observaciones ⚠️

### Caso Login Usuario

* Al momento de ejecutar el endpoint "GET" relacionado al login del usuario, sin importar los datos que se envien, siempre se genera un status code 200.

### Caso Listar mascotas por estado 'Disponible'

* Al listar las mascotas las trae en un orden aleatorio, no las ordenas de ninguna forma en especfico.
