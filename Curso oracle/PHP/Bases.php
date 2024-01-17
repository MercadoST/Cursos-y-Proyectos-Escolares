<?php

$variable = 300;

define('CONSTANTE', 'Valor'); // usar mayusculas 


echo ($variable); //plasma en el navegador

var_dump($variable);//muestra el tipo y valor o tamaño

echo gettype($variable); //muestra el tipo


echo ($variable < 4 ? 'es true' : 'es falso'); //operador ternario para hacer un if en una sola linea


?>