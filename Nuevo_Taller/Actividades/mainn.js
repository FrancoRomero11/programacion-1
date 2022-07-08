class Persona{

constructor(nombre,apellido,dni,cuil,direccion){
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.cuil = cuil
    this.direccion = direccion
}

}

class Circulo {
    constructor(diametro){
        this.diametro=diametro
    }
    area (){
        return Math.PI*(this.diametro* this.diametro)/4
    }
    perimetro(){
        return Math.PI*this.diametro
    }
}

class Producto{

    constructor(nombre,marca,tipo,precio,disponbilidad)
{
    this.nombre = nombre
    this.marca = marca
    this.tipo = tipo
    this.precio = precio
    this. disponibilidad = disponibilidad
}
}