function calcular(){

    const num1 = 2; 
    const num2 = 3;

    const resultado = Math.pow(num2,num1)
    return resultado 
}

function mostrar_resultado(){
    //invocamos a la funcion y recibmos una respuesta
    const respuesta = calcular()
    //
    alert(respuesta)
}