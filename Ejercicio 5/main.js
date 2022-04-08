function calcular_raiz(n1,n2,n3){

const calculo = -n2 + SQRT(Math.pow(n2,2)-4*n1*n3)

const resultado = 2*n1/calculo

return resultado
}



function mostrar_valor(){

const num1 = document.getElementById("inp_a").value 
const num2 = document.getElementById("inp_b").value 
const num3 = document.getElementById("inp_c").value 

const respuesta = calcular_raiz(num1,num2,num3)

alert(resultado)
}