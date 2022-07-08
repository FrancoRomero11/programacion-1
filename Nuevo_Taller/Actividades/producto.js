class Producto{

constructor (nombre,marca,descripcion,tipo,precio,stock){
    this.nombre = nombre
    this.marca = marca
    this.descripcion = descripcion
    this.tipo = tipo
    this.precio = precio
    this. stock = stock
    }

    compra(cantidad){
            this.stock = this.stock - cantidad
    }
    datosProducto(){
        return this.nombre + "-" + this.marca + "(" + this.descripcion + ") precio $" + this.precio + "cantidad:" + this.stock
    }
}
let productos = []
console.log(productos)
let producto1 = new Producto ("zapatilla","nike","zapatillas para correr sobre cemento","calzado",2000,100)
let producto2 = new Producto ("remera","nike","remera de vestir","vestimenta",5000,50)
producto1.compra(46)
document.write(producto1.datosProducto())
productos.push(producto1)
productos.push(producto2)
let arreglo =[]