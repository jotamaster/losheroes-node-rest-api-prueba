


# Prueba T茅cnica

Este repositorio tiene como  proposito demostrar conocimientos t茅cnicos en t茅cnologias de desarrollo de software.

## Comenzando 馃殌

El repositorio consta de una api rest CRUD de un modelo cliente.




## Tecnolog铆as:

1. Lenguaje de programaci贸n JS usando NodeJS v16.10.0
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

## Instalaci贸n:
### Primer paso: clonar el proyecto
```
git clone https://github.com/jotamaster/losheroes-node-rest-api-prueba.git
```

### Instala las dependencias 
```
npm install
```

### Copia el archivo .env.example, n贸mbralo .env  y configura las variables de entorno
```
cp .env.example .env
```

### Arrancar aplicaci贸n
Modo develop
```
npm start
```


## Descripci贸n de ENDPOINTS
### clients

GET:  "/api/clients", lista todos los clientes.

GET:  "/api/clients/:id", retorna un cliente filtrando por su ID.


POST:  "/api/clients", guarda un cliente. Ejemplo del objeto que recibe como par谩metro en el body:

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
