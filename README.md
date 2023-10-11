<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar le repocitorio
2. Ejecutar

```
yarn install
```
3. Instalar Nestjs CLI
```
npm i -g @nestjs/cli
```
4. levantar la base de datos 
```
docker-compose up -d
```
5. Clonar el archivo __.env.template__, renombrar a __.env__

6. Llegar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en Dev:
```
yarn star:dev

```
8. Reconstruir la base de datos usando la semilla en la url:
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* NestJS

