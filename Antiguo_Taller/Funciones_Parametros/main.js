function calcular_division(d1,d2){

    const resultado = d1 / d2
    return resultado
}

function mostrar_resultado(){
    //forma 1 
    const dato1 = document.getElementById("inp_dato1").value

    //forma 2
    const dato2 = document.querySelector("#inp_dato2").value

    //invocamos (ejecutamos) a la funcion, pero ademas le ebnviamos dos parametros
    //ademas recibimos una respuesta por parte de la funcion calcular_division()
    const respuesta = calcular_division(dato1,dato2)

    alert(respuesta)
}
