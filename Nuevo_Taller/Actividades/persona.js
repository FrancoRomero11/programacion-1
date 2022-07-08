class Personas {
    constructor(nombre,apellido,anioNac,dni,direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.anioNac = anioNac
        this.dni = dni
        this.direccion = direccion
    }
    edad(){
        let fecha = new Date()
        return fecha.getFullYear()-this.anioNac
    }
    datos(){
        return this.dni+" - " +this.nombre+""+this.apellido+ "de"+ this.edad()+"de a�os, vive en"+ this.direccion
    }
}

let Personas = []
function ingresarPersona (){
    let nombre= document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let anioNac = document.getElementById("anioNac").value
    let dni = document.getElementById("dni").value
    let direccion = document.getElementById("direccion").value
    let persona = new Personas (nombre, apellido,anioNac,dni,direccion)
    persona.push(persona)
    let padre = document.getElementById("ul")
    let li = document.createElement("li")
    li.textContent = persona.datos()
    li.classname+= "list.group-iem p-4"
    padre.appendChild(li)



}