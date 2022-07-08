class Televisor {
    constructor(tamaño,marca,modelo,resolucion,estado){
    this.tamaño = tamaño
    this.marca = marca
    this.modelo = modelo
    this.resolucion = resolucion
    this.estado = estado
}
    datoTelevisor(){
        return this.marca+"-"+this.modelo+" || "+ this.tamaño+"pulgada,"+ this.resolucion+"("+ this.estado+")"
    }
}
let televisores = []
function ingresarTelevisor (){
    let tamaño = document.getElementById("tamaño").value
    let marca = document.getElementById("marca").value
    let modelo = document.getElementById("modelo").value
    let resolucion = document.getElementById("resolucion").value
    let estado = document.getElementById("estado").value
    let televisor = new Televisor(tamaño,marca,modelo,resolucion,estado)
    televisores.push(televisor)
    let div= document.getElementById("demo") //div dondeseincrusta todo
    let p= document.createElement("p")
    p.textContent = televisor.datoTelevisor()
    div.appendChild(p)
}

function mostrarTelevisores(){
    let ul = document.getElementById("ul")
    if(ul.value!== ""){
        ul.innerHTML = ""
        for (const item of televisores) {
            let li = document.createElement("li")
            li.textContent = item.datoTelevisor()
            ul.appendChild(li)
        }
    }else{

    for (const item of televisores) {
        let li = document.createElement("li")
        li.textContent = item.datoTelevisor()
        ul.appendChild(li)
    }
}
}




//let div2 = document.createElement("p")
//div2.className = "card"
//let div3 = document.createElement("li")
//div3.textContext = televisor.datoTelevisor()
//div3.className = "List group - item mt - 3"
//div2.appendChild(div3)
//div1.appendChild(div2)