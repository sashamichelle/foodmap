$(document).ready(function(){

/*función para que desaparezca la pantalla de inicio*/

$(function(){
        $(".caja-1").fadeOut(1500);
    },3000);

/*función para que aparezca mi segunda parte*/
$(function(){
        $(".caja-2").fadeIn(1500);
    },3000);

$('select#select-1').on('change',function(){
    var valor1 = $(this).val();
    if (valor1==valor1) {
    	$('.sexta-col').html("<img src='assets/img/img-5.jpg' alt='' />");
    }
   
});

$('select#select-2').on('change',function(){
    var valor2 = $(this).val();
    alert(valor2);
});

$('select#select-3').on('change',function(){
    var valor3 = $(this).val();
    alert(valor3);
});


/*
if(miValor >= value1){
alert("elegiste la opcion 1");
var miTexto = $("#select-1 option:selected").text();
}
*/
});
