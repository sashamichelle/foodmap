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
    /*primer precio*/
    if (valor1=="$1500-$3000") {
    	$('.sexta-col').html("<img src='assets/img/img-5.jpg' alt='' />" + "<img src='assets/img/img-6.jpg' alt='' />" );
    	$('.octava-col').html("<img src='assets/img/img-7.jpg' alt='' />" + "<img src='assets/img/img-8.jpg' alt='' />" );
    }
    /*segundo precio*/
     if (valor1=="$3500-$5000") {
     	$('.sexta-col').html("<img src='assets/img/img-9.jpg' alt='' />" + "<img src='assets/img/img-10.jpg' alt='' />" );
    	$('.octava-col').html("<img src='assets/img/img-11.jpg' alt='' />" + "<img src='assets/img/img-12.jpg' alt='' />" );
    }
   
});

$('select#select-2').on('change',function(){
    var valor2 = $(this).val();
    /*primer tipo de comida*/
 if (valor2=="Vegetariana") {
    	$('.sexta-col').html("<img src='assets/img/img-13.jpg' alt='' />" + "<img src='assets/img/img-14.jpg' alt='' />");
    $('.octava-col').html("<img src='assets/img/img-15.jpg' alt='' />" + "<img src='assets/img/img-16.jpg' alt='' />");
    }
    /*segundo tipo de comida*/
    if (valor2=="Carnes y pescados") {
    	$('.sexta-col').html("<img src='assets/img/img-17.jpg' alt='' />" + "<img src='assets/img/img-18.jpg' alt='' />");
    $('.octava-col').html("<img src='assets/img/img-19.jpg' alt='' />" + "<img src='assets/img/img-20.jpg' alt='' />");
    }
    /*tercer tipo de comida*/
    if (valor2=="Sin especificar") {
    	$('.sexta-col').html("<img src='assets/img/img-21.jpg' alt='' />" + "<img src='assets/img/img-22.jpg' alt='' />");
    $('.octava-col').html("<img src='assets/img/img-23.jpg' alt='' />" + "<img src='assets/img/img-24.jpg' alt='' />");
    }
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
