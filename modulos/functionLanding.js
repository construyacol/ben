
// alert("funciones called");
      // $('.carousel.carousel-slider').carousel({fullWidth: true});
       $('ul.tabs').tabs(); 
       $('.materialboxed').materialbox();
       setTimeout(function(){
        member(1);
        mostrar(1);
        // initMap(); 
       },3000);


       //iniciamos programación de slide eventos realizados
       var sig = 0;
       setTimeout(function(){

           $(".imagenbox").hover(
            function () {
              $('img.imagenbox').css('border', 'none');
              //almacenamos en una variable la imagen que queremos visualizar
              let hola = $( this ).attr('src');
               $( this ).css('border', '2px solid #94d32e');
              //seleccionamos el contenedor padre 'picev' y mostramos la imagen en el
              $(this).parent('.contPicEv').parent('.contai').parent('.picEv').css( "background-image", `url(${hola})`);
              // console.log($(this).parent('.contPicEv').parent('.picEv'));
              // alert(hola);

            }
          );

       },3000);

       var microcontro=0;


       function next(i){
        sig += -100;
        //identificamos al contenedor de las fotos que le daremos movimiento, es un contenedor hermano por lo tanto:
        $(`div#sig${i}`).siblings(`div#contPic${i}`).css('left',`${sig}px`);
        microcontro++;
        $(`div#atra${i}`).css('display','initial');
        $(`div#atra${i}`).css('display','flex');

       }

       function after(i){
        sig += +100;
        //identificamos al contenedor de las fotos que le daremos movimiento, es un contenedor hermano por lo tanto:
        $(`div#atra${i}`).siblings(`div#contPic${i}`).css('left',`${sig}px`);
        microcontro--;
        if (microcontro==0) {
          $(`div#atra${i}`).css('display','none');
        }
       }
       


var control = 0;
var controlador = 0;

  function adelante(){
      
      // alert(siguiente);
      control+=(-100);
      $('.conteSections').css('left',control+'%');
      controlador++;
      $('#atras').css('display','initial');
      // console.log(controlador+' controlador');

  }
    function atras(){
      // alert(siguiente);
      control+=(100);
      $('.conteSections').css('left',control+'%');
      controlador--;
      if (controlador==0) {
        $('#atras').css('display','none');
      }

  }
//terminamos programación modulo de slide eventos realizados

  function member(id){
    $('.integrante').addClass('hide');
    $(`#epa${id}`).removeClass('hide');

    $('.picSpeaker').removeClass('picActivado');
    $(`#picSpeaker${id}`).addClass('picActivado');

    $('.member').removeClass('memberActivo');
    $('.member2').removeClass('memberActivo');
    $(`#member${id}`).addClass('memberActivo');



  }

        function initMap(mapa, lati, long) {
        
        setTimeout(function(){
          var uluru = {lat: lati, lng: long };
          var map = new google.maps.Map(document.getElementById(mapa), {
            zoom: 14,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: uluru,
            map: map
          });

        },1000)
     
      }




 function mostrar(i){
    $('.test').addClass('hide');
    $(`#test${i}`).removeClass('hide');
 }

function agregalo(){
	// for(let i = 1; i==1;i++){
		let blockchain=$('#bolckchain');
	console.log('funciono una sola vez');

	// blockchain.empty().append($('<div class="blockchain">').load("./blockchain.html"));
	// }
	
}


                if (($(window).width())<769){

                     }


      	
                $(window).on("scroll",function(){
                  if(($(window).scrollTop())>487){

                  	// console.log('mayor de menu '+menu);
                    
                    
                    $(".am").addClass('titul');

                    $("#bolckchain").addClass('hide');
                    $("#backBar").css("opacity", "1");
                    $("#barNav2").css("position", "fixed");
                    $("#barNav2").css("top", 0);
                    
                    $("#quEs").css("top", "75px");
                    $("#quEs").addClass('sombra');
                    
                    $("#nav-mobile").css("right", "40px");

                   
                    $("#barNav2").css("height","50px");
                    $("#barNav2").css("line-height","50px");

                    $("#img1").css("transform","translateX(-20px)");
                    $("#img1").css("opacity","1");

                    $("#img").css("transform","scale(1,1)");
                    $("#img").css("transition","0.3s");
                    

              		// agregalo();



                  } else{	

                    $(".am").removeClass('titul');


                    $("#bolckchain").removeClass('hide');

                    $("#backBar").css("opacity", "0");
                    $("#barNav2").css("position", "initial");

                    $("#quEs").css("top", "0px");

                    $("#nav-mobile").css("right", "calc(50% - 365px)");

                    // $("#qes").removeClass("l5");
                    // $("#qes").addClass("l6");
                    // $("#video").removeClass("l7");
                    // $("#video").addClass("l6");

                    // $("#parf").css("font-size","l4px");
                    // $("#parf").css("padding","0 20px");

                    $("#img1").css("transform","translateX(-80px)");
                    $("#img1").css("opacity","0.1");


                    $("#img").css("transform","scale(0,0)");
                    $("#img").css("transition","0.2s");









                  }
                });

          // } 
        // });
// }
