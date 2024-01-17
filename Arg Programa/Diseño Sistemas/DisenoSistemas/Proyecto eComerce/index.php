<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Carrito de compras</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <h4>Carrito de compras</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Item</th>
          <th scope="col">Cantidad</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody id="cuerpo">


      </tbody>

    </table>
    <div id="total">
    </div>
    <div id= "finalizarCompra">
    <button type="button" class="btn btn-success float-right mt-5 " onclick="finalizarCompra()">Finalizar Compra</button>
    </div>
  </div>
  <?php
  include_once "carrito.php";
  ?>
</body>
</html>