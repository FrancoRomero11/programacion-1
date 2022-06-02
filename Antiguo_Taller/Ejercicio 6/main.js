//estamos creando la funcion calcular
function calcular_raiz(a,b,c){

//se calcula 
const parte1 = Math.pow (b,2) - (4*a*c)

//se calcula la raiz cuadrada en positivo
const resultado1 = (-b) + Math.sqrt (parte1) / (2*a)
   
//se calcula la raiz cuadrada en negativo 
const resultado2 = (-b) - Math.sqrt (parte1) / (2*a)

//para retornar mas de un dato se utiliza lo que esta a continuacion
return resultado1.toFixed(2) +''+resultado2
}
    
    
//estamos creando la funcion mostrar     
function mostrar_valor(){
    
//estamos guardando los datos que ingreso un usuario 
const num_a = document.getElementById("inp_a").value 
const num_b = document.getElementById("inp_b").value 
const num_c = document.getElementById("inp_c").value 

//estamos ejecutando la funcion y a la vez enviando los 3 datos (a,b,c)
const respuesta = calcular_raiz(num_a,num_b,num_c)

//muestra el resutado-respuesta    
alert(respuesta)
}