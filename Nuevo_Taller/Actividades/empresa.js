class Empresa{
    constructor(){
        this.nombre = nombre
        this.empleado = []
        this.actividad = actividad
    }
    Altaempleado(){

    }
    Bajaempleado(){

    }
    Datosempresa(){

    }
}

class Empleado {
    constructor(nombre,apellido,dni,anioalta,diasvacaciones){

        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.anioalta = anioalta
        this.diasvacaciones = diasvacaciones
    }

nombreCompleto(){
    return this.apellido+","+this.nombre
}
cuil(){
    return "23 -"+this.dni+"- 1"
}
vacaciones(x){
    this.diasvacaciones = this.diasvacaciones - x
}
antiguedad(){
    let fecha= new Date("12")
    return fecha.getFullYear().this.anioalta
}
}

let empleados = []
do {
    let nombre = prompt("ingrese el nombre")
    let apellido = prompt("ingrese el apellido del empleado")
    let dni = prompt("ingrese el dni del empleado")
    let anioalta = prompt("ingrese el año de alta")
    let diasvacaciones = prompt("ingrese los dias de vacaciones")
    let empleado = new Empleado(nombre, apellido, dni, anioalta, diasvacaciones)
    empleado.push(empleado)
    var continuar = confirm ("desea contiuar")
} while (continuar)
for (const item of empleados) {
    let padre = document.getElementById("ul")
    let li = document.createElement("li")
    li.textContent= item.NombreCompleto()
    padre.appendChild(li)
}
