

module.exports = function (blogs){


		console.log('bloooooooooooooooooooooooooooooooooooooooooooog');
	  	var n = 1;
	  	var longitud = blogs.length;
		console.log('La longitud del array es: '+longitud);


	  	blogs.map(function(blog){

	  	if(n == longitud) {

	  		console.log('aqui entra n '+n)
	  		let agregarPrimer = '';
	  		agregarPrimer = agregarPrimer+
	  		`
	  		<a href="${blog.link}" target="_blank">
	  		<div class="col l10 posT2 po1">
				<div class="col l12  fullH blogDetalle">
					<h6 class="col l12 subtil  sinPadding left tituls2">${blog.titulo}</h6>
					<h6 class="col l12 paraf  sinPadding sinMargin left cardText">${blog.descripcion}</h6>
					<div class="col l12 bton sinPadding " style="margin: 0 0 10px 0">
						<div class="col l6 sinPadding fecha" style="">${blog.fecha}</div>
						<div class="col l6 right-align"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
					</div>
				</div>
			</div>
			</a>
	  		`;
	  		$('#post1').append(agregarPrimer);
            $('#post1').css( "background-image", `url(${blog.imagen})`);
            return false;
	  	}
	  	
	  	let agregaResto = '';
	  	agregaResto = agregaResto+
	  	`
	  	<div class="col l12 posT white sombra">
		  	<a href="${blog.link}" target="_blank">

				<div class="col l8  fullH blogDetalle">
					<h6 class="col l12 subtil  sinPadding left tituls2">${blog.titulo}</h6>
					<h6 class="col l12 paraf  sinPadding sinMargin left cardText">${blog.descripcion}</h6>
					<div class="col l12 bton sinPadding " style="margin: 0 0 10px 0">
						<div class="col l6 sinPadding fecha" style="">${blog.fecha}</div>
						<div class="col l6 right-align"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></div>
					</div>
				</div>
				<div class="col l4 fullH red picBlog mascara" id="picBlog${n}"><div class="saberm">Saber Más...</div></div>
			</a>
		</div>
	  	`;
	  	$('#posts').prepend(agregaResto);
        $(`#picBlog${n}`).css( "background-image", `url(${blog.imagen})`);
        n++;
	  	console.log('este es el valor de n: '+n);

	  	

	  	})

	  }


