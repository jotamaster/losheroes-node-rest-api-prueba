

# Prueba Técnica

Este repositorio tiene como  proposito demostrar conocimientos técnicos en técnologias de desarrollo de software.

## Comenzando 🚀

El repositorio consta de una api rest CRUD de un modelo cliente.




## Tecnologías:

1. Lenguaje de programación JS usando NodeJS v16.10.0
2. Base de datos no relacional MongoDB 7.24.0.
3. Controlador de versiones GIT 2.29.2

### Lista de dependencias:

1. express ^4.17.1
2. mysql2 ^2.3.3
3. dot-env ^10.0.0
4. cors ^2.8.5"

### Lista de dependencias de desarrollo:

1. nodemon ^2.0.14
2. @babel/cli ^7.16.0
3. @babel/core ^7.16.0
4. @babel/node ^7.16.0
5. @babel/preset-env ^7.16.0
6. jest ^27.3.1
7. supertest ^6.1.6

## Instalación:
### Primer paso: clonar el proyecto
```
git clone https://github.com/jotamaster/losheroes-node-rest-api-prueba.git
```

### Instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, nómbralo .env  y configura las variables de entorno
```
cp .env.example .env
```

### Arrancar aplicación
Modo develop
```
npm start
```

```

## Descripción de ENDPOINTS
### clients
<hr>

GET:  "/api/clients", lista todos los clientes.

GET:  "/api/clients/:id", retorna un cliente filtrando por su ID.


POST:  "/api/clients", guarda un cliente. Ejemplo del objeto que recibe como parámetro en el body:

```
{
    "name":"jean",
    "rut":"123123113",
    "email":"jean2@gmail.com",
    "address":"las tarrias"
}
```


DELETE: "/api/clients/:id", elimina un cliente seleccionado por su ID.

PUT : "/api/clients/:id" edita un cliente seleccinado por ID

```
{
    "name":"jean",
    "rut":"123123113",
    "email":"jean2@gmail.com",
    "address":"las tarrias"
}
```