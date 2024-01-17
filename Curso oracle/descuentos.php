<?php

$nombre = "Mario";
$compra = 350;

if($compra < 50){
    $porcentaje = 0.05;
}elseif(50 <= $compra and $compra < 100){
    $porcentaje = 0.1;
}elseif (100 <= $compra and $compra < 250) {
    $porcentaje = 0.15;
}elseif (250 <= $compra and $compra < 400) {
    $porcentaje = 0.2;
}

$descuento = $compra * $porcentaje;
$precioFinal = $compra - $descuento;

echo ('Hola, '.$nombre. ' el valor de su compra es: $' .$compra. 'y aplicando el descuento: $'.$descuento);



?>