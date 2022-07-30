class Producto {
    constructor(nombre, marca, categoria, urlimage, precio, stock) {
        this.nombre = nombre
        this.marca = marca
        this.categoria = categoria
        this.urllmage = urlimage
        this.precio = precio
        this.stock = stock
    }
    nombreCompleto() {
        return this.nombre + " - " + this.marca + ", " + this.precio + " - " + this.stock + ", "
    }
    venta(x) {
        this.stock = this.stock - x
    }
}
class Compra {
    constructor(cliente,tarjeta) {
        this.productos = []
        this.cliente = cliente
        this.tarjeta = tarjeta
    }
    agregarProducto(producto) {
        this.productos.push(producto)
    }
    subtotal() {
        let acum = 0
        for (let producto of this.productos) {
            acum = acum+producto.precio

        }
        return acum
    }
    total(){
        let precioiva= this.subtotal()*1.21
        let total= 0
        console.log(this.tarjeta)
        if (this.tarjeta) {
            total = precioiva * 1.15
        } else {
            total = precioiva
        }
        return total
    }
}

let cliente = prompt("Ingrese su nombre")
let tarjeta = confirm("¿Desea pagar con trajeta?")
let compra = new Compra(cliente,tarjeta)
console.log(compra.tarjeta)

function ingresarProducto() {
    let nombre = document.getElementById("nombre").value
    let marca = document.getElementById("marca").value
    let categoria = document.getElementById("categoria").value
    let urlimage = document.getElementById("urlimage").value
    let precio = parseInt(document.getElementById("precio").value)
    let stock = document.getElementById("stock").value
    let producto = new Producto(nombre,marca,categoria,urlimage,precio,stock)
    compra.agregarProducto(producto)
    let padre = document.getElementById("ul")
    let hijo = document.createElement("div")
    hijo.textContent = producto.nombreCompleto()
    hijo.className += "card"
    padre.appendChild(hijo)

}
function realizarCompra(){
    document.getElementById("subtotal").innerHTML = compra.subtotal()
    document.getElementById("total").innerHTML = compra.total()
}