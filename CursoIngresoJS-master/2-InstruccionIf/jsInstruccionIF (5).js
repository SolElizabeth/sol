//Al ingresar una edad solo debemos informar si la persona NO es adolescente.
//tomo la edad  

function Mostrar()
{
    var edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    if(edad<13||edad>17)//if condicional
    {
        alert("NO es adolescente");
    }


}//FIN DE LA FUNCIÓN