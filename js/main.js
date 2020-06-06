

/*$(document).ready(function(){
     
    var elementos=document.querySelectorAll("button");
   
     for (var i=0;i<elementos.length;i++){
         
     }
       // alert(i);

    

     
     
 });*/


/*Funciones de botones*/



 function  v_nota(nota){
     var seleccion_nota="";
     
     if(nota==1){seleccion_nota="redonda";}
     else if(nota==2){seleccion_nota="blanca";}
     else if(nota==3){seleccion_nota="negra";}
     else if(nota==4){seleccion_nota="corchea";}
     else if(nota==5){seleccion_nota="semicorchea";}

         
   $("#valor_notas").fadeIn(600);  
     
    document.getElementById("orden1").value=seleccion_nota;
    
  //$("#valor_notas").css("display","block");

    // alert(seleccion_nota);
 
 } 
 // Escala de la nota o los colores que toma la nota


function silencio(tipo_s){
    
    document.getElementById("orden1").value=tipo_s;
     
    var b_silencio=document.getElementById("orden1").value;
    
    if(b_silencio=="1"){             
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/otros/uno.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
              $("#valor_notas").fadeOut(600);        
     });
        
    }
   
     else if(b_silencio=="2"){             
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/otros/1medio.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
              $("#valor_notas").fadeOut(600);  
     });        
    }
    
    
    else if(b_silencio=="3"){             
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/otros/1cuarto.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
             $("#valor_notas").fadeOut(600);  
     });        
    }
    
      else if(b_silencio=="4"){             
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/otros/1octavo.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
             $("#valor_notas").fadeOut(600);  
     });        
    }
    
        else if(b_silencio=="5"){             
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/otros/tres.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
             $("#valor_notas").fadeOut(600);  
     });        
    }
    
    
}


function escala_nota(escala){
    var color_nota="";
    
    if(escala==14){color_nota="na";}
    else if(escala==13){color_nota="az";}
     else if(escala==12){color_nota="ve";}
      else if(escala==11){color_nota="am";}
       else if(escala==10){color_nota="ro";}
        else if(escala==9){color_nota="mo";}
         else if(escala==8){color_nota="pi";}
          else if(escala==7){color_nota="na_c";}
           else if(escala==6){color_nota="az_c";}
            else if(escala==5){color_nota="ve_c";}
             else if(escala==4){color_nota="am_c";}
              else if(escala==3){color_nota="ro_c";}
               else if(escala==2){color_nota="mo_c";}
                else if(escala==1){color_nota="pi_c";}
    
    document.getElementById("orden2").value=color_nota;
    
var primera=document.getElementById("orden1").value;
    var segunda=document.getElementById("orden2").value;
     
     var nombrenota=primera;
    
   //alert(nombrenota);
    
    if(nombrenota=="redonda"){
      
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/redonda/'+color_nota+'.png)"></div>');          
         $( function() {
     $( ".stikers" ).draggabilly();
     });
    $("#valor_notas").fadeOut(600);  
    }
       
    //figura: blanca--------------------------------------------------------
    
    else if(nombrenota=="blanca"){
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/blanca/'+color_nota+'.png)"></div>');
         $( function() {
     $( ".stikers" ).draggabilly();
     });
        $("#valor_notas").fadeOut(600);
    }

    
    // figura: Negra-----------------------------------------------------------
             else if(nombrenota=="negra"){
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/negra/'+color_nota+'.png)"></div>');
         $( function() {
     $( ".stikers" ).draggabilly();
     });
        $("#valor_notas").fadeOut(600);
    } 
    
   //--------------------------------------------------------------------------- 
           else if(nombrenota=="corchea"){
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/corchea/'+color_nota+'.png)"></div>');
         $( function() {
     $( ".stikers" ).draggabilly();
     });
        $("#valor_notas").fadeOut(600);
    } 
    
        
            else if(nombrenota=="semicorchea"){
        $('#zona_pentagrama').append('<div class="stikers" style="background-image: url(../notas/semicorchea/'+color_nota+'.png)"></div>');
         $( function() {
     $( ".stikers" ).draggabilly();
     });
        $("#valor_notas").fadeOut(600);
    } 
       
}

//------------------fin de funcion de botones panel1-----

$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});