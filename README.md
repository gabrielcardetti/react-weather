# May Weather

_El proyecto que contruimos es una web que provee informacion sobre el clima, utilizando React para construirla y usando la API OpenWeatherMap para poder obtener los datos ._


## Requisitos

_Dependencias necesarias para poder correr el proyecto correctamente_

```
$ node --version
v11.15.0

$ npm --version
v6.9.0
```
## Node y Npm instalación
#### Ubuntu
    
    $ sudo apt update
    $ sudo apt install nodejs
    $ sudo apt install npm
    
#### Arch
    
    $ sudo pacman -Syyu
    $ sudo pacman -S nodejs
    $ sudo pacman -S npm

    
## Instalación

```
$ git clone https://github.com/ORG/PROJECT.git
$ cd PROJECT
$ npm install
```
## Configuracion de keys para las APIS
_Lo primero que tenemos que hacer es crear un archivo llamado **.env** en la carpeta de raiz para poder configurar la varibale de entorno, dentro de este archivo se debe poner lo siguiente:_
```
OPENWEATHER_API_KEY=AQUI_VA_LA_KEY
```
Para poder conseguir esta key debemos crearnos una cuenta en [OpenWeatherMap](https://openweathermap.org/), aunque nosotros les proveemos un key para que prueben.
```
f56c89511abe2b1ee423e47a55199c41
```

Para poder configurar la key de google maps hay que seguir [estos](https://developers.google.com/maps/documentation/javascript/get-api-key) pasos, luego para configurar la key deben entrar a public/index.html y cambiar esta parte del codigo y colocar su key.

```
<script src="https://maps.googleapis.com/maps/api/js?key=AQUI_VA_LA_KEY=places"></script>
```

Lamentablemente google maps nos provee con una key que nos permite una sola busqueda por dia, el proyecto viene configurado con nuestra key gratuita, si quieren hacer mas busquedas para poder probar correctamente la web van a tener que colocar otra key.
Cuando nosotros comenzamos a hacer el laboratorio conseguimos una Key que funcionaba perfectamente, así logramos probar todo lo necesario para comprobar su buen funcionamiento, pero a ultimo momento la key caduco, por eso ahora tenemos la prueba gratuita. Es decir, con la Key que nosotros ofrecemos solo podes hacer una "request" si no se consigue otra key con licencia para probar nuestra app se recomiendo hacer Copy-paste de algún lugar elegido o probarla con "Tu ubicación".

## Estilo de codificación ⌨️

_Seguimos el [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) y para poder configurarlo solo deben instalar_

```
npm install -g eslint
```
## Ejecutando el proyecto
Para poder correr el proyecto, solo debemos ir a la carpeta de raiz del proyecto y correr
```
npm start
```
Luego en la terminal nos dice en que direccion esta hosteado el proyecto y esta suele ser **localhost:8080**

## Construido con

_Estas fueron las herramientas que utilizamos para crear el proyecto_

* [React ](https://reactjs.org/)
* [Google Maps API ](https://developers.google.com/maps/documentation/)
* [OpenWeatherMaps API](https://openweathermap.org/api)
* [Semantic UI React ](https://react.semantic-ui.com/)
* [Dotenv](https://github.com/mrsteele/dotenv-webpack) - Libreria para manejar variables de entorno.
* [Chartist](https://github.com/fraserxu/react-chartist) - Libreria para utilizar graficos como componentes.


## Autores ✒️

* **Gaston Aznares**
* **Gabriel Cardetti** 
* **Matias Pereyra**  

## Detalles del proyecto  

Nuestra web se divide en 4 partes importantes, Header, Actual (Tab1), Extendido (Tab2), Estadisticas (Tab3).

**Header**: Cuenta con un Titulo (Mai Weather), una imagen y un buscador. El buscador funciona gracias a la api de google places api y un componente React-places-autocomplite.

**Actual**: Contiene los datos del clima del dia actual, en esta Tab se encuentran los datos de Pesion, Temperatura Minima, Amanecer(Hora en la que amanece), Viento, Humedad, Temperatura Maxima, Anochecer(Hora en la que anochece) y un icono con movimiento que varia dependiend el clima del dia actual (Soleado, Nublado, Lluvioso, etc).

**Extendido**: Contiene los datos de los siguientes 5 dias ademas del actual. En esta Tab cada Carta de dia incluye detalles extras a cuales se pueden acceder con un click en la carta deseada(Si ya estan abiertos los detalles de una carta y se desea ver los de otras, hacer doble click en la nueva carta deseada, uno cerrara los detalles de la anterios y el siguiente abrira los nuevos).
En la carta se ve la informacion de Dia, Fecha(Incluye año, mes y dia), Temperatura Minima y Temperatura Maxima. Al acceder a los detalles se puede ver Dia, Humedad Presion Temperatura Promedio Temperatura Minima Temperatura Maxima y una grafica solo la temperatura a lo largo del dia.

### Punto extrella
* **Estadisticas**:    
 Contiene la informacion de UVI, esta informacion esta repartida en 3 bloques. El indice Actual Una barra que mide el nivel de UVI del dia y varia al color correspondiente dependiendo el nivel de UVI.
Indice UVI Previsto Contiene el Indice de UVI de el dia actual y el de los siguientes 5 dias, en estas cartas de puede ver el indice UVI correspondiendo por cada dia y la clasificacion de color que se le asigna.
Indice UVI ultimos 30 dias Contiene una grafica sobre el indice UVI a lo largo de los ultimos 30 dias. 

---
