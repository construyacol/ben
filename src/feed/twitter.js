module.exports = function (twits){

 	var indi = 0;


 	let twiteado = '';
	 		twiteado+= `
	 		<a href="${twits[indi].link}" target="_blank">
	 			<div class="col tweet white sombra" id="tweet">
							<div class="picT sombra"></div>
							<div class="icoT"><i class="fa fa-twitter" aria-hidden="true"></i></div>

							<div class="row infoC">
	 							<a href="${twits[indi].linkt}" target="_blank">
									<div class="textNombre col l12 subtil">${twits[indi].nombre}</div>
									<div class="textTwitter col l12 paraf">${twits[indi].twitter}r</div>
								</a>
							</div>
							<div class="row infoD borde3">
								<i class="fa fa-quote-left" aria-hidden="true"></i>
								<div class="textTDesc col l12 subtil">Descripción</div>
								<div class="textDesc col l12 paraf cursiva">${twits[indi].descripcion}</div>
							</div>
				</div>
			</a>
	 		`;

	 		$('#twittear').empty().append(twiteado);
            $(`.picT`).css( "background-image", `url(${twits[indi].foto})`);



    indi++;
 	var intervalo = setInterval(twitear,7000);

 	function twitear(){
 		
 		if(indi==twits.length){
 			indi = 0;
 		}
	 		let twiteado2 = '';
	 		twiteado2+= `
	 			<div class="col tweet white sombra" id="tweet">
							<div class="picT sombra"></div>
							<div class="icoT"><i class="fa fa-twitter" aria-hidden="true"></i></div>

							<div class="row infoC">
	 							<a href="${twits[indi].linkt}" target="_blank">
									<div class="textNombre col l12 subtil">${twits[indi].nombre}</div>
									<div class="textTwitter col l12 paraf">${twits[indi].twitter}r</div>
								</a>
							</div>
							<div class="row infoD borde3">
	 							<a href="${twits[indi].link}" target="_blank">

								<i class="fa fa-quote-left" aria-hidden="true"></i>
								<div class="textTDesc col l12 subtil">Descripción</div>
								<div class="textDesc col l12 paraf cursiva">${twits[indi].descripcion}</div>

								</a>
							</div>
				</div>
	 		`;

	 		$('#twittear').empty().append(twiteado2);
            $(`.picT`).css( "background-image", `url(${twits[indi].foto})`);

 		console.log(twits[indi].nombre);
 		indi++;

 	}




}



