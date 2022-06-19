function cargarProductos(){
    let productos=cargarProductosLs();
    let contenido=" ";

    for (const producto of productos) {
        contenido += ` <div class="col-md-4"
        <div class="card">
        <img src="assets/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">$${producto.precio}</p>
        <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});">Sumar al carrito</a>
        </div>
        </div>
        </div>`;
    }
    document.getElementById("productos").innerHTML= contenido
}


guardarProductosLs(productos);
cargarProductos();
actualizarBotonCarrito();


document.getElementById("vaciar_carrito").addEventListener("click", eliminarCarrito);