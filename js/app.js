var app = angular.module('personalsite', []);

app.controller('ProjectDescription', ['$http','$scope', function($http, $scope){
	this.tab = 1;
	$scope.modelExam = {};
	// variabile per estrapolare dati
	//var exam = this;
	//exam.information = [];
	$scope.examInformation = [];

	this.selectTab = function(setTab){
		
		this.tab = setTab;
		
	};

	this.isSelected = function(checkTab){
		// verifica se è true la tab selezionata con quella scelta, in quel caso la visualizza 
		/*	event.stopPropagation(); */	
		return this.tab === checkTab;
		
	};


	var logoHeight = $('.img-square').height();
	if (logoHeight < 104) {
		var margintop = (104 - logoHeight) / 2;
		$('#myDiv img').css('margin-top', margintop);
	}

	/*$http.get('json/project.json').success(function(data){
		$scope.examInformation = data.project;
		//console.log(exam.information.project[0].descrizione); per leggere la "descrizione" del primo progetto 		
		//$scope.modelExam = $scope.examInformation[0];		
		$scope.modelExam = $scope.examInformation;
		//console.log("CIOAO " + $scope.modelExam[0].nome);
	});*/

	/* This is for set the header */
	$http.get('php/header.php').success(function(data){
		
	});


}]);

/* Direttiva per il curriculum */
app.directive('baseInformation', function(){
	return {
		restrict: 'E',
		templateUrl: 'baseInformation.html',
		controller: function($scope){	
			
				// thanks this plugin we can show the effect on item
				$('blockquote > p').appear();
				$('blockquote > p').on('appear', function(event, $all_appeared_elements) {
					$(this).addClass("animated fadeInDown");
				});

			}
		};
	});

app.directive('istructionInformation', function(){
		return {
			restrict: 'E',
			templateUrl: 'istruction.html',
			controller: function($scope){
				// animate when there are same istruction
			 $('li.istruzione').find('img').appear();
			 $('li.istruzione').find('img').on('appear', function(event, $all_appeared_elements) {
			 	$(this).addClass("animated bounceInLeft");
			 });

			// animate text of istruction
			$('li.istruzione').find('div.inner').appear();
			$('li.istruzione').find('div.inner').on('appear', function(event, $all_appeared_elements) {
				$(this).addClass("animated bounceInRight");
			});
			}
		};
});

app.directive('skillInformation', function(){
		return {
			restrict: 'E',
			templateUrl: 'skill.html',
			controller: function($scope){
				

				// animate my skills. For this i add the class for each raw called bounce
	    		$('div.generalskills > .bounce').appear();
	    		$('div.generalskills > .bounce').on('appear', function(event, $all_appeared_elements) {
	    			$(this).addClass("animated rotateInDownLeft");
	    		});

	    		$scope.rotate = $("#rotatescroll");
    		/* TINYCIRCLESIDER */
    		$scope.rotate.tinycircleslider({
    			interval: true,				
    			dotsSnap: true, 
    			dotsHide: true,
    			width: false
    		});

    		var info = $scope.rotate.data("plugin_tinycircleslider");
			 


			 /* This function get the path of image */
			 String.prototype.filename=function(extension){
			 	var s= this.replace(/\\/g, '/');
			 	s= s.substring(s.lastIndexOf('/')+ 1);
			 	return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
			 }

			 $scope.rotate.bind("move", function()
			 {
			 	var number = info.slideCurrent;
			 	var dot = info.dots;				
			 	var innerhtml = info.dots[number].slide.innerHTML;				
			 	var finalNumber = number+1;
			 	/* Important question for xpath selector --> http://stackoverflow.com/questions/12243661/javascript-use-xpath-in-jquery*/	
			 	/* We get all the img for print the language that we use */ 
			 	var lan = $('ul.overview > li:nth-child('+finalNumber+'n)').find('img').attr('src').filename().toUpperCase();
			 	$('div.languagename h3').empty().append(lan);
			 });

			}
		};
});

app.directive('experienceInformation', function(){
	return {
		restrict: 'E',
		templateUrl: 'experience.html'
		
	}
});

/* Directive for nav bar */
/* Info directive http://stackoverflow.com/questions/18198592/behavior-of-controller-inside-directives */
app.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl: 'navbar.html',
		controller: function($scope){
			$(window).scroll(function() {
				$('#nav').affix({
					offset: {
						top: $('header').height()
					}
				});	
			});
		}
	}
});

/* Direttiva per l'area download */
app.directive('downloadPdf', function(){
	return {
		restrict: 'E',
		templateUrl: 'download.html'
	}
});

/* Direttiva per il portfolio */
app.directive('myPortfolio', function(){
	return {
		restrict: 'E',
		templateUrl: 'project.html',
		controller: function($scope){
			 $("#elastic_grid_demo").elastic_grid(
			 {
            'items' :
            [
                {
                    'title'         : 'Forza 4',
                    'description'   : "L' applicativo Gioco Forza 4 simula l'omonimo gioco su una macchina virtuale in modo	interattivo. E' strutturato da un'architettura stand-alone e quindi presuppone la presenza di due giocatori in locale a sfidarsi a colpi di pedine sulla stessa macchina. Scopo del gioco è riuscire a fare una combinazione di quattro pedine in successione (verticale, orizzontale, obliguo). Per rendere il gioco e il suo utilizzo maggiormente appetibile si è pensato ad un sistema che dia la possibilità di selezionare un livello di difficoltà. Linguaggi usati: Java, MySql",
                    'thumbnail'     : [ 'image_project/programmazione_internet/small/logo.png', 'image_project/programmazione_internet/small/classifica.png', 'image_project/programmazione_internet/small/difficolta.png', 'image_project/programmazione_internet/small/gioco.png', 'image_project/programmazione_internet/small/home_page.png'],
                    'large'         : [ 'image_project/programmazione_internet/large/logo.png', 'image_project/programmazione_internet/large/classifica.png', 'image_project/programmazione_internet/large/difficolta.png', 'image_project/programmazione_internet/large/gioco.png', 'image_project/programmazione_internet/large/home_page.png'],
                    'button_list'   :
                    [
                       /* { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Programmazione_internet']
                },
                {
                    'title'         : 'Faraza',
                    'description'   : "Realizzazione di un gestionale per la prenotazione di partite di calcetto. Si può accedere al sistema o come utente o come centro sportivo. Nel primo caso l'utente può prenotare un campo 'pubblicamente' mettendo un avviso tramite il quale altri utenti interessati a tale evento potranno parteciparvi o in alternativa prenotando il campo 'privatamente' ossia un utente decide lui chi invitare alla partire senza sfruttare il sistema di inviti messo a disposizione dal sistema. Nel secondo caso invece, qualora ci si registri come centro oltre che dare la possibilità  agli utenti di poter usufruire dei propri campi, come visto nel primo punto, un centro può organizzare tornei a cui gli utenti potranno iscriversi. Il sistema inoltre da la possibilità  di definire un voto e un commento dopo ogni match. Linguaggi usati: PHP, MySql, Bootstrap, CSS",
                    'thumbnail'     : ['image_project/basi_di_dati/small/logo.png', 'image_project/basi_di_dati/small/home.png', 'image_project/basi_di_dati/small/home_centro.png', 'image_project/basi_di_dati/small/profilo_utente.png', 'image_project/basi_di_dati/small/valutazione_prestazione.png'],
                    'large'         : ['image_project/basi_di_dati/large/logo.png', 'image_project/basi_di_dati/large/home.png', 'image_project/basi_di_dati/large/home_centro.png', 'image_project/basi_di_dati/large/profilo_utente.png', 'image_project/basi_di_dati/large/valutazione_prestazione.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Basi_di_dati']
                },
                {
                    'title'         : 'FoundOut Beacon',
                    'description'   : "L'intento dell'applicazione è quello di fornire una serie di funzioni all'utente che consentano di tracciare la posizione di oggetti (chiavi, portafogli), il tutto sfruttando un'architettura client server, utilizzando un database relazionale e linguaggio SQL. Principalmente l'applicazione permette: la visualizzazione dei Beacon disponibili e possibile modifica delle sue opzioni; Possibilità  di cercare il proprio dispositivo attraverso la ricezione del segnale Bluetooth; Visualizzazione dell'ultimo avvistamento effettuato; Visualizzazione di possibili ritrovamenti. Linguaggi utilizzati: Android, MySql",
                    'thumbnail'     : ['image_project/lam/small/logo.png', 'image_project/lam/small/home.png', 'image_project/lam/small/google_maps.png', 'image_project/lam/small/altbeacon_map.png', 'image_project/lam/small/google_maps_2.png', 'image_project/lam/small/inserisci_password.png' ],
                    'large'         : ['image_project/lam/large/logo.png' , 'image_project/lam/large/home.png', 'image_project/lam/large/google_maps.png', 'image_project/lam/large/altbeacon_map.png', 'image_project/lam/large/google_maps_2.png', 'image_project/lam/large/inserisci_password.png' ],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Laboratorio_applicazioni_mobili']
                },
                {
                    'title'         : 'Very Simple',
                    'description'   : "Realizzazione di un social-network in GWT che da la possibilità  agli utenti di postare messaggi in stile twitter selezionando una categoria. Tale categoria viene definita da un admin, il quale oltre ad avere questa mansione può eliminare i messaggi ritenuti inopportuni. Ogni utente iscritto alla piattaforma può avere una lista di seguaci e in ogni momento eliminarli. L'obiettivo dell'applicazione è stato principalmente acquisire competenze con il linguaggio UML. Linguaggi usati: UML, GWT",
                    'thumbnail'     : ['image_project/ingegneria_del_software/small/logo.png', 'image_project/ingegneria_del_software/small/crea_categoria.png', 'image_project/ingegneria_del_software/small/creazione_messaggio.png', 'image_project/ingegneria_del_software/small/profilo_utente.png', 'image_project/ingegneria_del_software/small/segui_utenti.png'],
                    'large'         : ['image_project/ingegneria_del_software/large/logo.png', 'image_project/ingegneria_del_software/large/crea_categoria.png', 'image_project/ingegneria_del_software/large/creazione_messaggio.png', 'image_project/ingegneria_del_software/large/profilo_utente.png', 'image_project/ingegneria_del_software/large/segui_utenti.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Ingegneria_del_software']
                },
                {
                    'title'         : 'Raschietto',
                    'description'   : "Ideazione di un sito che mira a estrapolare informazioni attraverso la tecnica del Web Scraping ossia estraendo dati per mezzo di una sintassi XPATH la quale agisce sulla struttura logica di un documento HTML. Con le informazioni estrapolate sia automaticamente o in alternativa manualmente è possibile eseguire delle annotazioni. Con quest'ultimo termine si intende la creazione di query SPARL da mandare ad un server. L'intento di quest'ultima operazione è volto a favorire l'interazione tra i vari utenti (in questo caso i vari gruppi del corso) in modo che ognuno possa leggere le annotazioni degli altri e visualizzarle sul documento originale. Linguaggi usati: HTML, JQuery, PHP, SPARL, CSS, Bootstrap, XPath" ,
                    'thumbnail'     : ['image_project/tecnologie_web/small/logo.png', 'image_project/tecnologie_web/small/home.png', 'image_project/tecnologie_web/small/crea_annotazioni.png', 'image_project/tecnologie_web/small/salva_annotazioni.png', 'image_project/tecnologie_web/small/scraping.png','image_project/tecnologie_web/small/visualizza_annotazioni_2.png'],
                    'large'         : ['image_project/tecnologie_web/large/logo.png', 'image_project/tecnologie_web/large/home.png', 'image_project/tecnologie_web/large/crea_annotazioni.png', 'image_project/tecnologie_web/large/salva_annotazioni.png', 'image_project/tecnologie_web/large/scraping.png','image_project/tecnologie_web/large/visualizza_annotazioni_2.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Tecnologie_web']
                }

            ]
        });
			
		}
	}
});

