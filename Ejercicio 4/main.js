//estamos creando la funcion que calcula 
function calcular_area_cir(n1){

//se calcula el radio que ingreso el usuario al cuadrado 
    const calculo = Math.pow(n1,2)

//se calcula el area de circunferencia 
    const resultado = Math.PI*calculo

//se comparte larespuesta-resultado
    return resultado 
}

//estamos creando la funcion que muestra el resultado-calculo
function mostrar_area(){

//estamos guardando el dato que puso un usuario (radio)
    const num = document.getElementById("inp_radio").value

//estamos ejecutando la funcion y a la vez estamos enviando el radio 
    const respuesta = calcular_area_cir(num)
    
    //muestra el resultado
    alert(respuesta)

}
