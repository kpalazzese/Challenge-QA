//Question 1: Generate 500 random numbers and print the nth smallest number.
var numeros = new Array(500);
for (var cont=0; cont<=499; cont++) 
{
  //Generar un array de 500 números aleatorios
  numeros [cont] = Math.random();
}
//Ordenamos el array de 500 números aleatorios de menor a mayor
numeros.sort();
//Imprimimos el menor número (posición 0)
console.log(numeros [0]);



	
	
