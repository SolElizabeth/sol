/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
    var importe=document.getElementById("importe").value;//representa el importe en el que se vende el producto
    var resultado=document.getElementById("resultado").value=resultado;
    importe=parseInt(importe);
    resultado=importe-(importe*0.25);
    document.getElementById("resultado").value=resultado;
   
    
	
}
