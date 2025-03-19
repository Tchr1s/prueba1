<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$comentario = $_POST['comentario'];

var_dump($nombre);
$rta = mail('csepulveda232001@gmail.com', $asunto, $comentario)
var_dump($rta)
?>