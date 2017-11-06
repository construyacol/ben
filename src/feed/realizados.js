
 // var request = require('superagent');

module.exports = function (eventos){

	  	var indice = 1;
	  	var c=1;




	  	eventos.map(function(evento){
	  		let event = evento;
	  		let agregarHtml = ''

	  		console.log(event.titulo);
	  		agregarHtml = agregarHtml + `
	  						<div class="picEv" id="picc${indice}"> 
							 	
							 	<div class="titularEv sombra">
								 	    <div class="eventoRealizado">
									 		<p class="tituloEv subtil"><i class="fa fa-check-circle-o" aria-hidden="true"></i>EVENTO REALIZADO</p><p class="sabermas">Saber Más <i class="fa fa-caret-down" aria-hidden="true"></i></p>
								 		</div>
							 		<p class="credito left-align" style="font-size: 9px">${event.fecha}</p>
							 		<p class=" paraf left-align" style="font-size: 13px;">${event.descripcion}</p>

							 		
							 	</div>
							 	<div class="contPics">
							 		<p class="fullW left-align subtil tituMemo" style="color: white !important;">${event.titulo}</p>
							 	</div>
							 	
							 	<div class="mascara contai">

								 	<div class="contPicEv " id="contPic${indice}">

								 		
								 	</div>
								 	<div class="sig" id="sig${indice}" onclick="next(${indice});" onmouseover="next(${indice});"> > </div>
								 	<div class="atra" id="atra${indice}" onclick="after(${indice});" onmouseover="after(${indice});"> < </div>
							 	</div>

							 </div>
	  		`;
	  		$('#contSection').append(agregarHtml);

            $(`#picc${indice}`).css( "background-image", `url(${event.images[0]})`);

	  		console.log('----------');
	  		// console.log(event.images[1]);

		  		event.images.map(function(img){
		  			// console.log(img);
		  			let agregarHtml2='';
		  			agregarHtml2= agregarHtml2+
		  			`
		  			<img class="imagenbox" width="50" src="${img}" >

		  			`;

	  				$(`#contPic${indice}`).append(agregarHtml2);

		  		})
		  		indice++;
	  	})


	  }


