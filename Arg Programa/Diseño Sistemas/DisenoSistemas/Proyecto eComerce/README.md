#Proyecto Ecommerce
Documentación:
 
- Para poder ejecutar el siguiente código, se utilizó el toolkit llamado XAMPP que es una distribución del servidor Apache el cual permitirá correr el proyecto de forma local fácilmente

- La versión que se utilizó de XAMPP es la 8.1.10 y esta se puede descargar a través de su pagina oficial [ https://www.apachefriends.org/es/index.html ]

- Una vez descargado e instalado procedemos a ir a la ubicación donde se instaló este. Una vez dentro ingresamos a la carpeta htdocs y borraremos todo lo que se encuentre en su interior.

- Ahora debemos clonar el repositorio donde se encuentra el proyecto [ https://github.com/MercadoST/DisenoSistemas/tree/main/Proyecto%20eComerce ] dentro de la carpeta antes mensionada [ .../xampp/htdocs/ ].

- Por último debemos ejecutar el programa XAMPP previamente instalado, una vez ejecutado en la fila donde se encuentra el servicio "Apache" debemos darle a Start y esperar que este se ponga en verde, luego daremos en la misma fila al botón de Admin, se nos abrirá el explorador donde mostrará el carrito con los items ya cargados.

El propósito que tiene el siguiente proyecto es:
 
1- Tomar un archivo donde se encuentra serializado los datos necesarios para el correcto funcionamiento del carrito, en este caso es "entrada.json". Para este caso se necesita traer los siguientes datos: ID, Item, Cantidad, Precio.

2- Se procede a deserializar el archivo recibido con los datos y mostrarlos como un ítem en el carrito donde además se podrá modificar la cantidad.

3- Por último una vez que se confirma la compra con los ítems y sus respectivas cantidades se procede a serializar estos datos para luego ser enviados.

