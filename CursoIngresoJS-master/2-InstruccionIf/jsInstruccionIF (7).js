//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
//mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
//tomo la edad  
function Mostrar()
{
     var edad=document.getElementById("edad").value;
     edad=parseInt(edad);
     var estadocivil=document.getElementById("estadoCivil").value;
     if(edad<18 || estadocivil!=soltero)//no tendria que ser un y en ves de un o
     {
         alert("Es muy pequeño para no ser soltero");
     }


	


}//FIN DE LA FUNCIÓN