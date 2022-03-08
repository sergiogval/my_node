# Primero lo primero / First thing first

Esto es una base con la cual empezar. Tomaré éste repositorio con el propósito de que sea un punto de partida para construir una aplicación propia de Node.js. Al menos intentarlo. El objetivo de hoy es entender cómo se puede ser un servidor para protocolos http. De esta manera podemos ir a supuestas direcciones de internet, pero en realidad sólo ir a una instancia creada en el mismo equipo donde se está trabajando. En otras palabras, ser tu propio servidor. Todo el contenido está en tu propio equipo.

El material didáctico se encuentra en w3schools.com

This is the baseline to start with. I'll take this repo as a starting point to build my own node.js app. At least to try to. Today's goal is to understand how to be your own server. 

**under work**

## This is a test / Ésto es una prueba

No soy un programador profesional, sólo un estudiante eterno. No es de esperar un código perfecto, sino un código que funcione. Que sea claro y sencillo, para reforzar mi entendimiento y esperando que sea de provecho para quien desee aprender a programar.

I'm not a professional programmer. I'm just a student. So, the code is not perfect. But I'm trying to learn something new and convey it in a manner that allows me to understand it. Hopping it can contribute to the learning of others. 

## How to make this work?

**I strongly recommend to do this in a VM.**

### Prerequisites

- Basic knowledge of HTML, CSS, JavaScript.
- A text editor (sublime, atom, vscode, you name it).
- A good browser. I usually use two of them. running different engines.
- nodejs.

### Steps / Pasos

1. Crear un nuevo directorio.
2. en un archivo con extensión .js tomar y copiar el siguiente código:

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
```	
3. gurdar el archivo en el directorio creado, con el nombre http_node.js
4. Abrir la consola, y dirigirse al directorio creado.
5. ejecutar el comando: `node http_node.js`
6. En el navegador abrir la dirección: `http://localhost:8080`
7. Agregar un `/` y la palabra que se le ocurra  en la barra de direcciones.
8. En el navegador verá la palabra que se ingresó en la barra de direcciones, desplegada dentro del navegador.

Conclusión en mi equipo, el código crea y renderiza una página web. con el contenido de la url.
Ni siquiera una linea de http en el código.

***Under Work***
