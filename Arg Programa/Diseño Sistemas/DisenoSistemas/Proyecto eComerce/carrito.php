<script>

    const ContainerUi = document.querySelector("#cuerpo");
    const TotalUI = document.querySelector("#total");

    var user = new XMLHttpRequest();
    user.responseType = "json";
    user.open("GET", "entrada.json");
    user.send();

    user.onload = function () {
        if (user.status == 200) {
            var datos = user.response;
            llenarTabla(datos);
            mostrarTotal();
            calcularTotal()
        }
    }

    function llenarTabla(datos) {
        if (datos.length > 0) {
            datos.forEach(dato => {
                linea(dato);
            });

        } else {
            console.log("error");
        }
    }

    function linea(dato) {
        let ContainerTabla = document.createElement("tr");
        ContainerTabla.className = "linea";
        ContainerTabla.id = dato.ID

        let LineaUI = `
            <th>${dato.ID}</th>
            <th>${dato.Item}</th>
            <th id="${dato.ID}-cant">
                <button class="restarProducto btn btn-sm btn-light" onclick="restarCantidad(${dato.ID}, ${dato.Precio})">-</button>
                <span class="cantidadProductos" value="${dato.Cantidad}">${dato.Cantidad}</span>
                <button class="sumarProducto btn btn-sm btn-light" onclick="aumentarCantidad(${dato.ID}, ${dato.Precio})">+</button>
                <button class="eliminarProducto btn btn-sm btn-light" onclick="eliminar(${dato.ID})">Eliminar</button>
            </th>
            <th class="subTotal" value="${subTotal(dato.Precio, dato.Cantidad)}">$${subTotal(dato.Precio, dato.Cantidad)}</th>
    `;

        ContainerTabla.innerHTML = LineaUI;

        ContainerUi.appendChild(ContainerTabla);
    }
    function mostrarTotal() {
        let ContainerTotal = document.createElement("tr");
        ContainerTotal.className = "row justify-content-between";

        let FinalUI = `
                <th></th>
                <th></th>
                <th></th>
                <th class="sbtotal"></th>
    `;

        ContainerTotal.innerHTML = FinalUI;

        TotalUI.appendChild(ContainerTotal);
    }

    function calcularTotal() {
        let Total = document.querySelector(".sbtotal");
        let valores = document.getElementsByClassName("subTotal");
        let sumado = 0;
        for (let i = 0; i < valores.length; i++) {
            let element = valores.item(i);
            sumado = sumado + parseInt(element.getAttribute("value"))
        }
        Total.innerHTML = "Total: $" + sumado;
        return sumado;
    };

    /*Funcion que obtendra el resultado de la cantidad de productos multiplicados por su precio*/
    function subTotal(precioUnidad, cantidad) {
        let subtotal = precioUnidad * cantidad;
        return subtotal;
    };

    /*Funcion que aumentara el valor de la cantidad y actualizara el subtotal */
    function aumentarCantidad(prod, precio) {
        let producto = document.getElementById(prod);
        let subTotal = producto.querySelector(".subTotal");
        let value = producto.querySelector(".cantidadProductos");
        let actual = parseInt(value.getAttribute("value"));
        suma = actual + 1;
        value.setAttribute("value", suma);
        value.innerHTML = suma;
        let precioA = precio * suma;
        subTotal.innerHTML = "$" + precioA;
        subTotal.setAttribute("value", precioA);
        calcularTotal()
    };

    /*Funcion que disminuira el valor de la cantidad y actualizara el subtotal */
    function restarCantidad(prod, precio) {
        let producto = document.getElementById(prod);
        let subTotal = producto.querySelector(".subTotal");
        let value = producto.querySelector(".cantidadProductos");
        let actual = parseInt(value.getAttribute("value"));
        if (actual <= 1) {
            alert("No se puede disminuir la cantidad");
        } else {
            resta = actual - 1;
            value.setAttribute("value", resta);
            value.innerHTML = resta;
            let precioA = precio * resta;
            subTotal.innerHTML = "$" + precioA;
            subTotal.setAttribute("value", precioA);
            calcularTotal()
        }
    };

    function eliminar(id) {
        articulo = document.getElementById(id);
        if (!articulo) {
            alert("El elemento selecionado no existe");
        } else {
            padre = articulo.parentNode;
            padre.removeChild(articulo);
            calcularTotal();
        }
    };

    function finalizarCompra(){
    $total = calcularTotal();
    window.location.href = "compra.php/" + $total;
    }
</script>