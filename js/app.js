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

// : "L' applicativo Gioco Forza 4 simula l'omonimo gioco su una macchina virtuale in modo	interattivo. E' strutturato da un'architettura stand-alone e quindi presuppone la presenza di due giocatori in locale a sfidarsi a colpi di pedine sulla stessa macchina. Scopo del gioco è riuscire a fare una combinazione di quattro pedine in successione (verticale, orizzontale, obliguo). Per rendere il gioco e il suo utilizzo maggiormente appetibile si è pensato ad un sistema che dia la possibilità di selezionare un livello di difficoltà. Linguaggi usati: Java, MySql",
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
                    'description'   : "L'Applicazione Forza 4 simula l'omonimo gioco su una macchina virtuale in modo interattivo. Scopo del gioco è riuscire a fare una combinazione di quattro pedine in successione. Linguaggi usati: Java, MySql",
                    'thumbnail'     : [ 'assets/programmazione_internet/small/logo.png', 'assets/programmazione_internet/small/classifica.png', 'assets/programmazione_internet/small/difficolta.png', 'assets/programmazione_internet/small/gioco.png', 'assets/programmazione_internet/small/home_page.png'],
                    'large'         : [ 'assets/programmazione_internet/large/logo.png', 'assets/programmazione_internet/large/classifica.png', 'assets/programmazione_internet/large/difficolta.png', 'assets/programmazione_internet/large/gioco.png', 'assets/programmazione_internet/large/home_page.png'],
                    'button_list'   :
                    [
                       /* { 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Programming']
                },
                {
                    'title'         : 'Faraza',
                    'description'   : "Realizzazione di un gestionale per la prenotazione di partite di calcetto. Due modalità di accesso: utente (prenota partite sia pubbliche che private e si può iscrivere a tornei vari); centro sportivo (organizza tornei). Linguaggi usati: PHP, MySql, Bootstrap, CSS",
                    'thumbnail'     : ['assets/basi_di_dati/small/logo.png', 'assets/basi_di_dati/small/home.png', 'assets/basi_di_dati/small/home_centro.png', 'assets/basi_di_dati/small/profilo_utente.png', 'assets/basi_di_dati/small/valutazione_prestazione.png'],
                    'large'         : ['assets/basi_di_dati/large/logo.png', 'assets/basi_di_dati/large/home.png', 'assets/basi_di_dati/large/home_centro.png', 'assets/basi_di_dati/large/profilo_utente.png', 'assets/basi_di_dati/large/valutazione_prestazione.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['DB']
                },
                {
                    'title'         : 'FoundOut Beacon',
                    'description'   : "L'intento dell'applicazione è quello di fornire una serie di funzioni all'utente che consentano di tracciare la posizione di oggetti (chiavi, portafogli), il tutto sfruttando un'architettura client server, utilizzando un database relazionale e linguaggio SQL. Linguaggi utilizzati: Android, MySql",
                    'thumbnail'     : ['assets/lam/small/logo.png', 'assets/lam/small/home.png', 'assets/lam/small/google_maps.png', 'assets/lam/small/altbeacon_map.png', 'assets/lam/small/google_maps_2.png', 'assets/lam/small/inserisci_password.png' ],
                    'large'         : ['assets/lam/large/logo.png' , 'assets/lam/large/home.png', 'assets/lam/large/google_maps.png', 'assets/lam/large/altbeacon_map.png', 'assets/lam/large/google_maps_2.png', 'assets/lam/large/inserisci_password.png' ],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['App mobili']
                },
                {
                    'title'         : 'Very Simple',
                    'description'   : "Realizzazione di un social-network in GWT che da la possibilità  agli utenti di postare messaggi in stile twitter selezionando una categoria. Due modalità di accesso: utente (può aggiungere e cancellare amici); admin (gestisce messaggie categorie).  Linguaggi usati: UML, GWT",
                    'thumbnail'     : ['assets/ingegneria_del_software/small/logo.png', 'assets/ingegneria_del_software/small/crea_categoria.png', 'assets/ingegneria_del_software/small/creazione_messaggio.png', 'assets/ingegneria_del_software/small/profilo_utente.png', 'assets/ingegneria_del_software/small/segui_utenti.png'],
                    'large'         : ['assets/ingegneria_del_software/large/logo.png', 'assets/ingegneria_del_software/large/crea_categoria.png', 'assets/ingegneria_del_software/large/creazione_messaggio.png', 'assets/ingegneria_del_software/large/profilo_utente.png', 'assets/ingegneria_del_software/large/segui_utenti.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Software Engineering ']
                },
                {
                    'title'         : 'Raschietto',
                    'description'   : "Ideazione di un sito che mira a estrapolare informazioni sia automaticamente che manualmente per mezzo del Web Scraping: estrazione dati usando la tecnologia XPath. Tali informazioni una volta mandate al server (Sparql), possono essere lette.Linguaggi usati: HTML, JQuery, PHP, SPARL, CSS, Bootstrap, XPath" ,
                    'thumbnail'     : ['assets/tecnologie_web/small/logo.png', 'assets/tecnologie_web/small/home.png', 'assets/tecnologie_web/small/crea_annotazioni.png', 'assets/tecnologie_web/small/salva_annotazioni.png', 'assets/tecnologie_web/small/scraping.png','assets/tecnologie_web/small/visualizza_annotazioni_2.png'],
                    'large'         : ['assets/tecnologie_web/large/logo.png', 'assets/tecnologie_web/large/home.png', 'assets/tecnologie_web/large/crea_annotazioni.png', 'assets/tecnologie_web/large/salva_annotazioni.png', 'assets/tecnologie_web/large/scraping.png','assets/tecnologie_web/large/visualizza_annotazioni_2.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Web']
				},
				{
                    'title'         : 'P2PMaze',
                    'description'   : "L'obiettivo del gioco è riuscire a risolvere il labirinto usando la logica. Il giocataore, che può muoversi con le frecce della tastiera, dovrà superare i vari ostacoli per riuscire ad arrivare al tesoro. Ha a disposizione tre vite per raggiungere il suo obiettivo finale.  Si può giocare in Singleplayer o Multiplayer. In quest'ultimo caso ci si dovrà registrare e selezionare uno dei peer disponibili, se ne esistono.",
                    'thumbnail'     : ['assets/P2P/small/logo.png', 'assets/P2P/small/connect.png', 'assets/P2P/small/input.png', 'assets/P2P/small/multiplayer.png'],
                    'large'         : ['assets/P2P/large/logo.png', 'assets/P2P/large/connect.png', 'assets/P2P/large/input.png', 'assets/P2P/large/multiplayer.png'],
                    'button_list'   :
                    [
                        /*{ 'title':'Demo', 'url' : 'http://bonchen.net/' },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/'}*/
                    ],
                    'tags'          : ['Web']
                }

            ]
        });
			
		}
	}
});

