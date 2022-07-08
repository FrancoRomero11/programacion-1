
class Producto {
  constructor(nombre, marca, categoria, urllmage, precio, stock) {
    this.nombre = nombre
    this.marca = marca
    this.categoria = categoria
    this.urllmage = urllmage
    this.precio = precio
    this.stock = stock
  }
  nombreCompleto() {
    return (
      this.nombre +
      " - " +
      this.marca +
      ", " +
      this.precio +
      " - " +
      this.stock +
      ", "
    )
  }
  venta(x) {
    this.stock = this.stock - x
  }
}
class Compra {
  constructor(cliente, cantidad, tarjeta) {
    this.productos = []
    this.cliente = cliente
    this.cantidad = cantidad
    this.tarjeta = tarjeta
  }
  agregarProducto(producto) {
    this.productos.push(producto)
  }
  subtotal() {
    acum = 0
    for (let producto of this.productos) {
      acum = acum + producto.precio
    }
    return acum
  }
  total() {
    let precioiva = this.subtotal() * 1.21
    let total = 0
    if (this.tarjeta) {
      (total = precioiva * 1.15)
    } else {
      total = precioiva
    }
    return total
  }
}

let producto = []
function agregarCompra() {
  let nombre =document.getElementById("nombre").value
  let marca = document.getElementById("marca").value
  let categoria =document.getElementById("categoria").value
  let imagen = document.getElementById("imagen")
  let precio = document.getElementById("precio").value
  let stock = document.getElementById("stock").value
  let producto = new Producto(nombre,marca,categoria,imagen,precio,stock)
  producto.push(producto)
  let div= document.getCreateElement("demo")
  let p= document.getCreateElement("p")
  p.textContent = producto.nombreCompleto()
  div.appendChild(p)
}


function calcularTotal(){
  console.log(Compra.productos)
  document.getElementById("sub").innerHTML=Compra.subtotal
  document.getElementById("total").innerHTML=Compra.total

}