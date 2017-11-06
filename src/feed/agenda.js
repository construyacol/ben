

module.exports = function (agenda){
	
	var link = 1;
	var ind=1;

	agenda.map(function(evento){
		let agregarEvento = '';
		agregarEvento+=`
			<li class="tab col s3 paraf"><a id="testeo${link}" onclick="mostrar(${link});" href="#test${link}">${evento.fecha.dia} de ${evento.fecha.mes}</a></li>
		`;
		$('#fechas').append(agregarEvento);

		let agregarEvento2 = '';
		agregarEvento2 += `
		<div id="test${link}" class="col l12 m12 s12  sinPadding test" >


				    	<div class="col l8 m8 s12 infoEvento" >
				    		<div class="row tiesp"> 
				    			<div class="col l6 s12 tituEvento">
				    				<div class="col l3 fullH fechades">
				    						<div class="numerod paraf">${evento.fecha.dia}</div>
				    						<div class="dia subtil">${evento.fecha.mes}</div>
				    				</div>
				    				<div class="col l9 fullH titudesc titul">
				    						<div class="proxiE subtil" style="color:white !important;">Proximo Evento</div>
				    					<div class="col l12 pE subtil">${evento.titulo}</div>
				    				</div>
				    			</div>

				    			<div class="col l6 s12 speEvento" id="speEve${link}">

					    				

					    		</div>

				    		</div>

				    		
				    		<div class="row desmap">
				    			<div class="col l7 s12 descEvento">
				    				<div class="col l12 subtil left desE">Descripción</div>
				    				<div class="col l12 paraf left texE">${evento.descripcion}</div>
				    			</div>

				    			<div class="col l5 s12 mapEvento">

				    				<div class="lugar">
				    					<h6 class="lugartxt subtil" style="color:  white !important;">${evento.lugar}</h6>
				    					<h6 class="horatxt paraf" style="color:  yellow !important;">${evento.hora}</h6>
				    				</div>

				    				<div id="mapa${link}" class="mapa">
				    				</div>

				    			</div>
				    		</div>

				    	</div>



				    	<div class="col l4 s12 borde contCtaE">
					    	<div class="col l12 s12 sinMargin  ctaEvento" >
					    		<img src="iso2.png" width="75px" height="75px">
					    		<div class="col l12 cdis">
					    			<h6 class="cudi subtil">Cupos Disponibles</h6>
					    			<h6 class="dicudi paraf">${evento.cupo}</h6>
					    		</div>
					    		<div class="col l12 cdis">
					    			<h6 class="inen subtil">Inicia en:</h6>
					    			<h6 class="regrec paraf">14d - 22h - 10m</h6>
					    		</div>

					    		<div class="col 12"><a class="btn btne">¡Reservar mi cupo!</a></div>
					    	</div>
				    	</div>
				    </div>
		`;

		// console.log(evento.fecha.dia);
		$('#eventico').append(agregarEvento2);

			evento.speakers.map(function(speaker){
				let agregarSpeaker='';
				agregarSpeaker += `
					<div class="cardSpeaker">
	    				<div class="picSpeaker pictureU" id="picture${ind}"></div>
	    				<div class="infSpeaker">
	    					<div class="col l12 center credit namS">${speaker.nombre}
	    						<span class="col l12 center paraf empS">${speaker.empresa}</span>
	    					</div>
	    				</div>
	    			</div>
				`;
				$(`#speEve${link}`).append(agregarSpeaker);
            	$(`#picture${ind}`).css( "background-image", `url(${speaker.pic})`);
            	ind++;
			})
			let latitud = evento.latitud;
			let longitud = evento.longitud;
			let mapa = `mapa${link}`;
			initMap(mapa, latitud, longitud);
		// console.log('la long es: '+longitud+' y la latitud es '+latitud+'  y el id del mapa es '+mapa);
		link++;
	})


			// initMap();
	



	  }


