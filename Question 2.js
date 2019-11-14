//Question 2: Create a program to recognize palindrome sentences (e.g. Race Car)

//Pedir por pantalla al usuario que ingrese una oración
var sentence = prompt();

//Convertir toda la oración a minúsculas.
sentence=sentence.toLowerCase();

//Quitar los espacios en blanco
sentence=sentence.replace(/ /g, "");

result = new Boolean(true);
for (var i=0;i<sentence.length;i++)
{
	if(sentence[i]!=sentence[sentence.length-i-1])
	{
		result = false;
	}
}
	
if (result)
{	
    console.log("Esto es palíndromo");
} 	
else 
{ 
    console.log("Esto NO es palíndromo");
}