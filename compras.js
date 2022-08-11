function capturar() {
  //console.log("catch");
  function compra(producto, precio) {
    this.producto = producto;
    this.precio = precio;
  }
  let productoCapturar = document.getElementById("producto").value;
  let precioCapturar = document.getElementById("precio").value;

  nuevoCompra = new compra(productoCapturar, precioCapturar);
  console.log(nuevoCompra);
  agregar();
}
let BaseDatos = [];
function agregar() {
  BaseDatos.push(nuevoCompra);
  console.log(BaseDatos);
  //document.getElementById("tabla").innerHTML +=
  //'<tbody><td>'+nuevoCliente.producto'</td><td>'+nuevoCliente.precio'</td></tbody>';
}
