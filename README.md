# Lab 3 - Proyecto MayWeather

# Instruccciones de instalacion

## Dependencias
Aca van las dependencias.
## Para configurar las variables de entorno
Usamos esta libreria https://github.com/mrsteele/dotenv-webpack

>Creamos el archivo .env en la carpeta root y
>dentro del archivo seteamos la variable ```OPENWEATHER_API_KEY=aquivalakey```

# Detalles del proyecto

El proyecto que contruimos en un web que provee informacion sobre el clima, par esto utilizamos React para la interfaz de usuario y obtuvimos los datos de la API `OpenWeatherMap`.

Para el interfaz de usuario de React utilizamos la libreria `Semantic UI React` (https://react.semantic-ui.com/).

Nuestra web se divide en 4 partes importantes, `Header`, `Actual` (Tab1), `Extendido` (Tab2), `Estadisticas` (Tab3).

* ***Header:*** Cuenta con un Titulo (Mai Weather), una imagen y un buscador. El buscador funciona gracias a la api de google `places api` y un componente `React-places-autocomplite`.

* ***Actual:*** Contiene los datos del clima del dia actual, en esta Tab se encuentran los datos de `Pesion`, `Temperatura Minima`, `Amanecer`(Hora en la que amanece), `Viento`, `Humedad`, `Temperatura Maxima`, `Anochecer`(Hora en la que anochece) y un icono con movimiento que varia dependiend el clima del dia actual (Soleado, Nublado, Lluvioso, etc).

* ***Extendido:*** Contiene los datos de los siguientes 5 dias ademas del actual. En esta Tab cada Carta de dia incluye detalles extras a cuales se pueden acceder con un click en la carta deseada(Si ya estan abiertos los detalles de una carta y se desea ver los de otras, hacer doble click en la nueva carta deseada, uno cerrara los detalles de la anterios y el siguiente abrira los nuevos).
En la carta se ve la informacion de `Dia`, `Fecha`(Incluye año, mes y dia), `Temperatura Minima` y `Temperatura Maxima`. Al acceder a los detalles se puede ver `Dia`, `Humedad` `Presion` `Temperatura Promedio` `Temperatura Minima` `Temperatura Maxima` y una grafica solo la temperatura a lo largo del dia.

>Punto extrella
* ***Estadisticas:*** Contiene la informacion de UVI, esta informacion esta repartida en 3 bloques. `El indice Actual` Una barra que mide el nivel de UVI del dia y varia al color correspondiente dependiendo el nivel de UVI.
`Indice UVI Previsto` Contiene el Indice de UVI de el dia actual y el de los siguientes 5 dias, en estas cartas de puede ver el indice UVI correspondiendo por cada dia y la clasificacion de color que se le asigna.
`Indice UVI ultimos 30 dias` Contiene una grafica sobre el indice UVI a lo largo de los ultimos 30 dias.
