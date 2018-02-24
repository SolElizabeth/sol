//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
//tomo la edad  

function Mostrar()
{
    var edad=(document.getElementById("edad").value);
    edad=parseInt(edad);

    if(edad>=18)//condicion
    {
        alert("Es mayor de edad");   
    }

    else // o le podria poner if(edad<18)
    {
        alert("Es menor de edad");
    }
 


}//FIN DE LA FUNCIÓN