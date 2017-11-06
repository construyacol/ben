var page = require('page');
var realizados = require('./realizados');
var agenda = require('./agenda');
var blog = require('./blog');
var twitter = require('./twitter');
var request = require('superagent');

function loadInfo(ctx, next){

		$('title').html('BEN Colombia');
		let main = $('#globalConainer');

	    main.empty().append($("<div>").load("./secciones.html #secciones",function(){

	    	let sec1 = $('#seccion1');
	    	sec1.append($('<div class="lol">').load("./barNav.html",function(){
	    			
	    	// $.getScript("../node_modules/materialize-css/js/carousel.js");
	    	var loader=$('#caRou');
	    	loader.append('<div class="loader" id="loader">Cargando...</div>');
			// console.log(loader+' loader')

	    	next();

	    	let blockchain=$('#bolckchain');

	    		if (($(window).width())<769){
                      	
           			   		blockchain.css( "background-image", `url(./fondo.jpg)`);
                     }else{
	    					blockchain.append($('<div class="blockchain">').load("./blockchain.html"));
                     }


            	

	    	}));

	    	// main.append('<div class="loader" id="loader">Cargando...</div>');
	    }));
}


function DatosEventos(ctx, next){
			request
				.get('/api/eventos')
				.end(function(err,res){
					if (err) return console.log(err);
					ctx.eventos = res.body;
					// console.log(ctx.eventos);
					// sessionStorage.setItem("eventos", ctx.eventos); 
					next();

				})
}

function DatosAgenda(ctx, next){
			request
				.get('/api/agenda')
				.end(function(err,res){
					if (err) return console.log(err);
					ctx.agenda = res.body;
					// console.log(ctx.eventos[0].evento.titulo);
					// sessionStorage.setItem("eventos", ctx.eventos); 
					next();
				})
}

function DatosBlog(ctx, next){
			request
				.get('/api/blog')
				.end(function(err,res){
					if (err) return console.log(err);
					ctx.blog = res.body;
					// console.log(ctx.eventos[0].evento.titulo);
					// sessionStorage.setItem("eventos", ctx.eventos); 
					next();
				})
}
function DatosTwitter(ctx, next){
			request
				.get('/api/twitter')
				.end(function(err,res){
					if (err) return console.log(err);
					ctx.twitter = res.body;
					// console.log(ctx.eventos[0].evento.titulo);
					// sessionStorage.setItem("eventos", ctx.eventos); 
					next();
				})
}

page('/', loadInfo,DatosEventos,DatosBlog, DatosAgenda, DatosTwitter, function(ctx, next){

	var loader=$('#loader');
	loader.hide();
	// var eventos = sessionStorage.getItem("eventos"); 


    realizados(ctx.eventos);
    blog(ctx.blog);
	agenda(ctx.agenda);
	twitter(ctx.twitter)
})





