//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, 
//pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
//tomo la edad  
function Mostrar()
{
    var edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    var estadoCivil=document.getElementById("estadoCivil").value;
    if( estadoCivil==soltero && edad>18) 
    {
        alert("Es soltero y es menor");
    }

	


}//FIN DE LA FUNCIÓN