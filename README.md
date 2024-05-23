# REST API - Sprint 4.1

_Este proyecto ha sido desarrollado desde cero por [Sergio Andújar](https://github.com/sergioab7)._

_Aplicación creada para el sprint4.1 de IT Academy._

## Autor ✒️

* [Sergio Andújar](https://github.com/sergioab7) - *Todo el proyecto*

# Objetivos
En aquesta entrega crearem un servidor utilitzant Express.js, per proporcionar servei a l'API REST de la llista de tasques (TODO-LIST), aplicant l'arquitectura hexagonal. 

- ✅ Afegir una tasca a la llista: Implementarem una ruta i un controlador per permetre als usuaris afegir noves tasques a la seva llista.

- ✅ Marcar una tasca com a completada: Crearem una ruta i un controlador per a permetre als usuaris marcar una tasca com a completada.

- ✅ Eliminar una tasca de la llista: Implementarem una funcionalitat per eliminar tasques de la llista utilitzant una ruta i un controlador adequats.

- ✅ Mostrar la llista de tasques: Crearem una ruta i un controlador per obtenir i mostrar la llista completa de tasques als usuaris.

## Variables de entorno
```
Crear el archivo .env en la raiz y poner el puerto:
PORT=3005
```

### Instalación 🔧
```
npm install
```
### Comandos para ejecutar ⌨️
```
npm run dev
```

## Arquitectura del proyecto 🛡

![Captura desde 2024-05-23 18-06-17](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/782945ec-0d93-4b90-b52e-32cce7f23d6a)


## Rutas de la aplicación 🚏

_Actualizar el estado (completado) - PUT_
```
http://localhost:3005/tasks/:id
```

![Captura desde 2024-05-23 18-08-41](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/5d425e77-53c3-4d80-ab8c-7a60a2268b97)


_Borrar tarea - DELETE_
```
http://localhost:3005/tasks/:id
```
![Captura desde 2024-05-23 18-10-45](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/7549565a-d5ed-4619-88ec-be1052b55e88)


_Crear tarea - POST_
```
http://localhost:3005/tasks/
Content-Type: application/json

{
    "title":"Comprar pan"
}
```
![Captura desde 2024-05-23 18-09-11](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/be8355ab-e4f5-4ae6-9e6b-d752e6cebea6)

_Mostrar todas las tareas - GET_
```
http://localhost:3005/tasks/
```
![Captura desde 2024-05-23 18-09-37](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/c6cb2fa7-ec1b-482a-bf94-05935e546a42)


_Mostrar 1 tarea - GET_
```
http://localhost:3005/tasks/:id
```
![Captura desde 2024-05-23 18-09-56](https://github.com/sergioab7/sprint4-hexagonal/assets/10132565/a92687c8-bb4a-4bc9-b267-0c4c8483f8bc)


