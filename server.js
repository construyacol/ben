

var express = require('express');
var app = express();

// var formidable = require('express-formidable');
// app.use(formidable.parse({ keepExtensions: true, uploadDir:"uploads" }));

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get(['/', '/signup','/signin','/feed','/:username'], function(req, res){
	res.render('index', {title:'Platzigram'})
})

app.get('/api/eventos', function(req, res){
	var eventos = [
	{
		   titulo: 'Simposio Universidad Nacional',
		   fecha: '10 de mayo del 2017',
		   imag:'./sinpo.jpg',
		   descripcion:'Simposio realizado el 10 de mayo del 2017 en la facultad de ciencias económicas de la universidad nacional.  El evento “Bitcoin y Blockchain, la revolución tecnológica del futuro y sus aplicaciones en el presente” contó con la participación de más de 450 personas.',
		   images:[
		   		'./img1.jpg',
		   		'./img2.jpg',
		   		'./img3.jpg',
		   		'./img4.jpg',
		   		'./img5.jpg',
		   		'./img6.jpg',
		   		'./img7.jpg',
		   		'./img8.jpg',
		   		'./img9.jpg',
		   		'./img10.jpg',
		   		'./img11.jpg',
		   		'./img12.jpg'
		   ]
	},
	
	{
		   titulo: 'Bitcoin Airdrop',
		   fecha: '11 de agosto del 2017',
		   imag:'./sinpo.jpg',
		   descripcion:'Este evento tiene la intención de promover en la juventud el interés por Bitcoin y la tecnología blockchain, aplicando la filosofía expuesta en su sitio web: “La mejor explicación a ¿Qué es Bitcoin? Está en usarlo.” El mismo consta de llamar la atención de la gente y concentrarla en un lugar específico ofreciéndoles carteras digitales cargadas con un monto en BTC, y luego explicarles de qué se trata, cómo usarlos, y el gran número de ventajas que ofrece, no sólo el bitcoin, sino también la blockchain que le sirve de plataforma.',
		   images:[
		   		'./aimg1.jpg',
		   		'./aimg2.jpg',
		   		'./aimg3.jpg',
		   		'./aimg4.jpg',
		   		'./aimg5.jpg',
		   		'./aimg6.jpg',
		   		'./aimg7.jpg',
		   		'./aimg8.jpg',
		   ]
	},
	{
		   titulo: 'Programa de TV trasmitido por Canal Institucional',
		   fecha: '15 de junio del 2017',
		   imag:'./sinpo.jpg',
		   descripcion:'Para muchos colombianos el término Bitcoin no es familiar, pero ya es tendencia el manejo de esta moneda virtual utilizada para intercambiar bienes y servicios, que a diferencia de otras divisas, opera sin un emisor central, nadie es dueño y es manejada por la red. En este capítulo, los expertos Germán Guerrero Chaparro, Vicedecano de la Facultad de Ciencias Económicas; Mauricio Tovar Gutiérrez del grupo InTIColombia; y Jhonathan Higuera Rodríguez, de la Unidad de Análisis Financiero de la Facultad de Ciencias Económicas, nos explican cómo se maneja, las propiedades y la seguridad a la hora de usarla. <a href="http://untelevision.unal.edu.co/detalle/cat/punto-critico/article/bitcoin-y-aplicaciones-del-blockchain.html" target="_blank">Ver Entrevista</a>',
		   images:[
		   		'./cimg1.jpg',
		   		'./cimg2.jpg',
		   		'./cimg3.jpg',
		
		   ]
	},
	{
		   titulo: 'Programa UNAnálisis de UNRadio:',
		   fecha: '18 de mayo del 2017',
		   imag:'./sinpo.jpg',
		   descripcion:'BITCOIN <br><br> ¿Cómo son las transacciones de esta moneda?, ¿Cuál es la reglamentación?, ¿Cómo nos estamos preparando? <br><br> <a href="http://unradio.unal.edu.co/nc/detalle/cat/un-analisis/article/jueves-de-economia-55//page/3.html" target="_blank">Escuchar Programa</a>',
		   images:[
		   		'./pimg1.jpg',
		   ]
	}
]

	res.send(eventos)
		
	
});

app.get('/api/agenda', function(req, res){
	var agenda = [
		{
		   titulo: 'Simposio Universidad Nacional',
		   fecha: { dia:'10',
		   			mes:'mayo',
		   			ano:'2017'
					},
		   hora:'8:30 am - 11:00 am',
		   lugar:'Frontier Teatro',
		   latitud: 4.0912468,
		   longitud: -76.2013889,
		   cupo: 15,
		   descripcion: 'Simposio realizado el 10 de mayo del 2017 en la facultad de ciencias económicas de la universidad nacional. El evento “Bitcoin y Blockchain, la revolución tecnológica del futuro y sus aplicaciones en el presente” contó con la participación de más de 450 personas.',
		   speakers:[{
		   		nombre:'speaker1',
		   		empresa:'empresa1',
		   		pic:'./tipo.png'
		   	},
		   	{
		   		nombre:'speaker2',
		   		empresa:'empresa1',
		   		pic:'./tipo.png'
		   	},
		   	{
		   		nombre:'speaker2',
		   		empresa:'empresa1',
		   		pic:'./andres.jpg'
		   	},
		   	]
		},
		{
		   titulo: 'Airdrop',
		   fecha: { dia:'22',
		   			mes:'Agosto',
		   			ano:'2017'
					},
		   hora:'10:30 am - 11:00 pm',
		   lugar:'Plaza civica boyaca',
		   latitud: 3.4178525,
		   longitud: -76.5236068,
		   cupo: 15,
		   descripcion: 'Este evento tiene la intención de promover en la juventud el interés por Bitcoin y la tecnología blockchain, aplicando la filosofía expuesta en su sitio web: “La mejor explicación a ¿Qué es Bitcoin? Está en usarlo.” El mismo consta de llamar la atención de la gente y concentrarla en un lugar específico ofreciéndoles carteras digitales cargadas con un monto en BTC, y luego explicarles de qué se trata, cómo usarlos, y el gran número de ventajas que ofrece, no sólo el bitcoin, sino también la blockchain que le sirve de plataforma.',
		   speakers:[{
		   		nombre:'speaker1',
		   		empresa:'empresa1',
		   		pic:'./tipo.png'
		   	},
		   	{
		   		nombre:'speaker2',
		   		empresa:'empresa1',
		   		pic:'./tipo.png'
		   	},
		   	]
		},

]

	res.send(agenda)
		
	
});



app.get('/api/blog', function(req, res){
	var blog = [
		{
		   titulo: 'Blockchain: una tecnología para asegurar la validez de las transacciones',
		   fecha: '23 de Mayo 2017',
		   descripcion:'En la octava entrega de “Preparando el futuro” hacemos un recorrido por una base de datos distribuida entre los nodos de una red. Se trata de Blockchain y funciona como un libro mayor replicado en varios nodos',
		   imagen:'./blog2.jpg',
		   link:'https://www.grupobancolombia.com/wps/portal/empresas/capital-inteligente/tendencias/innovacion/blockchain-tecnologia-para-asegurar-validez-de-transacciones?utm_source=twitter&utm_medium=pago&utm_term=intereses&utm_content=ad-blocchain-clics&utm_campaign=always-on-empresas-capitalinteligente-capital-inteligente'
		},
		{
		   titulo: 'Banco de la República y Superfinanciera entran en la onda blockchain',
		   fecha: '9 de Junio 2017',
		   descripcion:'El superintendente financiero, Jorge Castaño, anunció que su entidad firmó este miércoles un contrato con la firma de desarrollo de blockchain R3, algo que ya había hecho el Banco de la República.',
		   imagen:'./blog4.jpg',
		   link:'http://www.dinero.com/economia/articulo/banco-de-la-republica-y-superfinanciera-entran-en-la-onda-blockchain/249575'
		},
		{
		   titulo: 'Criptomonedas, el fin del monopolio de la emisión de dinero',
		   fecha: '25 de Junio 2017',
		   descripcion:'La tecnología de blockchain, que respalda las monedas virtuales, se abre paso para muchas aplicaciones, entre ellas, la administración pública y las operaciones dentro de una empresa.',
		   imagen:'./blog7.jpg',
		   link:'http://www.finanzaspersonales.co/columnistas/articulo/bitcoin-criptomonedas-el-fin-del-monopolio-de-la-emision-de-dinero/72636'
		},
		{
		   titulo: 'Blockchain: Tecnología que elimina intermediarios',
		   fecha: '25 de Julio 2017',
		   descripcion:'La tecnología blockchain nos brinda posibilidades de usarla para generar confianza, seguridad y transparencia entre personas y entidades que no necesariamente se conozcan',
		   imagen:'./blog6.jpg',
		   link:'http://www.dinero.com/empresas/articulo/blockchain-tecnologia-elimina-intermediarios-mauricio-tovar/247869'
		},
		{
		   titulo: 'Al sector financiero le llegó su Uber: así se transforma la banca con tecnología',
		   fecha: '9 de Agosto 2017',
		   descripcion:'La inteligencia artificial, la automatización de procesos, el blockchain y la computación en la nube, son solo algunas de las tendencias tecnológicas que hoy ponen contra la pared al sector financiero tradicional.',
		   imagen:'./blog3.jpg',
		   link:'http://www.dinero.com/inversionistas/articulo/que-son-las-fintech-y-por-que-estan-revolucionando-la-banca/249614'
		},
		{
		   titulo: 'Banco de la República Colombia, R3 se une a DLT',
		   fecha: '29 de Agosto 2017',
		   descripcion:'El banco colombiano es el primero en Latinoamérica en aceptar la invitación del proveedor de tecnología.',
		   imagen:'./blog5.jpg',
		   link:'https://www.financemagnates.com/fintech/news/banco-de-la-republica-colombia-r3-join-forces-dlt/'
		},
		{
		   titulo: 'Colombia 4.0 revela expectativas del gobierno colombiano en desarrollo de blockchain',
		   fecha: '29 de Septiembre 2017',
		   descripcion:'Corrupción, mejoras en servicios del sector público, regulaciones y economía fueron temas que convergieron con la blockchain y las criptomonedas en el megaevento Colombia 4.0',
		   imagen:'./blog1.jpg',
		   link:'https://criptonoticias.com/eventos/colombia-4-0-revela-expectativas-gobierno-colombiano-desarrollo-blockchain/#axzz4wAgHsr8Y'
		},
		{
		   titulo: '¿Es el Blockchain, la tecnología detrás del bitcoin, una revolución?',
		   fecha: '31 de Octubre 2017',
		   descripcion:'Cifras del Banco Mundial muestran que más de 24 países están llevando a cabo investigaciones en tecnología Blockchain, con inversiones por más de $1,4 billones de dólares para desarrollo. La clave está en la confianza.',
		   imagen:'./blog8.jpg',
		   link:'http://www.finanzaspersonales.co/columnistas/articulo/bitcoin-que-es-y-como-funciona-el-blockchain/74278'
		},
		
]

	res.send(blog)
});


app.get('/api/twitter', function(req, res){
	var twits = [
		{
		   nombre: 'Jhonathan H‏',
		   twitter: '@JhaHigueraRo',
		   linkt: 'https://twitter.com/@JhaHigueraRo',
		   fecha: '24 Sep',
		   descripcion:'Con el interés de los bancos centrales en Blockchain,  en 5 años al menos los más importantes ya tendrán su propia criptomoneda.',
		   foto:'https://pbs.twimg.com/profile_images/846174684341293056/2ninnl7J_400x400.jpg',
		   link:'https://twitter.com/JhaHigueraRo/status/911952187420561408'
		},
		{
		   nombre: 'Juliana Carmona',
		   twitter: '@julianacarmonag',
		   linkt: 'https://twitter.com/julianacarmonag',
		   fecha: '2 Nov',
		   descripcion:'Mauricio Tovar de @UN_InTIColombia comparte las ventajas de la tecnología Blockchain',
		   foto:'https://pbs.twimg.com/profile_images/878736209320792065/bYJ7It8q_400x400.jpg',
		   link:'https://twitter.com/julianacarmonag/status/926109956562145281'
		},
		{
		   nombre: 'BEN COLOMBIA‏',
		   twitter: '@ColombiaBen ',
		   linkt: 'https://twitter.com/ColombiaBen',
		   fecha: '25 Oct',
		   descripcion:'Primer  Blockchain Challenge, promoviendo el desarrollo Blockchain @Ministerio_TIC  @Jairoquint  @maurotov @Jorgep190  @BlockchainEdu',
		   foto:'https://pbs.twimg.com/profile_images/893097822827847680/HYbJOZjD_400x400.jpg',
		   link:'https://twitter.com/ColombiaBen/status/923281677639651329'
		},
		{
		   nombre: 'CriptoNoticias‏ ',
		   twitter: '@CriptoNoticias',
		   linkt: 'https://twitter.com/CriptoNoticias',
		   fecha: '21 Oct',
		   descripcion:'Si crees que #Bitcoin permanecerá un rato en su #precio actual #FAV. Si crees que seguirá subiendo ¡#RT! 😁✊',
		   foto:'https://pbs.twimg.com/profile_images/643324739247865857/7hoGrKDh_400x400.jpg',
		   link:'https://twitter.com/CriptoNoticias/status/921817141590024193'
		},
		{
		   nombre: 'Mauricio Tovar',
		   twitter: '@maurotov',
		   linkt: 'https://twitter.com/@maurotov',
		   fecha: '18 Oct',
		   descripcion:'Un gusto haber compartido ayer en foro sobre criptomonedas y Blockchain con @maurotoroo @Dumpita @abeltran83, entre otros especialistas.',
		   foto:'https://pbs.twimg.com/profile_images/925018598044766208/5VJpmq_d_400x400.jpg',
		   link:'https://twitter.com/maurotov/status/920733934660571136'
		},
		{
		   nombre: 'Capital Inteligente',
		   twitter: '@Cap_Inteligente',
		   linkt: 'https://twitter.com/@Cap_Inteligente',
		   fecha: '27 Jul',
		   descripcion:'Esta es la tecnología que transformará los procesos de seguridad para validación de transacciones de bases de datos',
		   foto:'https://pbs.twimg.com/profile_images/867236950209683461/8AUuajB6_400x400.jpg',
		   link:'https://twitter.com/Cap_Inteligente/status/890638421860995074'
		},
		{
		   nombre: 'Mauricio Tovar',
		   twitter: '@maurotov',
		   linkt: 'https://twitter.com/@maurotov',
		   fecha: '16 Ago',
		   descripcion:'Programa de radio donde debatimos sobre bitcoin, sus beneficios, oportunidades y riesgos vía @WRadioColombia',
		   foto:'https://pbs.twimg.com/profile_images/925018598044766208/5VJpmq_d_400x400.jpg',
		   link:'https://twitter.com/maurotov/status/897826119168208896'
		},


]

	res.send(twits)
});



app.listen(8000, function(err){
	if(err) return console.log("Hubo un error"), process.exit(1);

	console.log('Ben colombia ejecutandose en el puerto 8000')
})
  