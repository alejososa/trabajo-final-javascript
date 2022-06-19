function buscarProducto(id) {
  let productos = cargarProductosLs();
  return productos.find((x) => x.id == id);
}

function cargarProductosCarrito() {
  if (localStorage.getItem("carrito")) {
    return JSON.parse(localStorage.getItem("carrito"));
  }
  return [];
}

function agregarAlCarrito(id) {
  let producto = buscarProducto(id);
  let productos_carrito = cargarProductosCarrito();
  productos_carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(productos_carrito));
  actualizarBotonCarrito();
}

function eliminarCarrito() {
  localStorage.removeItem("carrito");
  actualizarBotonCarrito();
}

function actualizarBotonCarrito() {
  let productos_carrito = cargarProductosCarrito();
  let contenido = `<button type="button"
    class="btn btn-primary position-relative"><img src="./assets/cart3.svg" alt="carrito" width="25"><span
        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${productos_carrito.length}
    </span></button>`;
  document.getElementById("boton_carrito").innerHTML = contenido;
}

function eliminarProducto(id) {
  let productos_carrito = cargarProductosCarrito();
  let productos_carrito_actualizado = productos_carrito.filter(x=> x.id != id);
  localStorage.setItem("carrito", JSON.stringify(productos_carrito_actualizado));
  cargarProductosSeleccionados();
  actualizarBotonCarrito(); 
}

function cargarProductosSeleccionados() {
  let productos = cargarProductosCarrito();
  let productos_seleccionados = document.getElementById("productos_seleccionados");
  let contenido = "";
  if (productos.length == 0) {
    contenido =
      "<p class= 'text-center'> No seleccionaste ningún producto. </p>";
    productos_seleccionados.innerHTML = contenido;
  } else {
    let total = 0;
    contenido = `<table class="table table-dark table-striped">
    <tr>
    <th>Nombre</th>
    <th>Precio</th>
    <th>Talle</th>
    <th>Eliminar</th>
    </tr> 
    `;
    for (const producto of productos) {
      contenido += `<tr>
<td>${producto.nombre}</td>
<td>${producto.precio}</td>
<td><select class="form-select" aria-label="Default select example">
<option selected>Sleccionar talle</option>
<option value="1">S</option>
<option value="2">M</option>
<option value="3">L</option>
<option value="4">XL</option>
</select>
<td><button class= 'btn btn-danger' onclick='eliminarProducto(${producto.id});'>[ x ]</button></td>
</tr>`;
      total += producto.precio;
    }

    contenido += `<tr>
    <td> Total a pagar</td>
    <td><b> $${total}</b></td>
    <tr>
    </table>`;
    productos_seleccionados.innerHTML = contenido;
  }
}


