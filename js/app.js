var app = angular.module('personalsite', []);

app.controller('ProjectDescription', ['$http','$scope', function($http, $scope){
	this.tab = 1;
	// variabile per estrapolare dati
	//var exam = this;
	//exam.information = [];
	$scope.examInformation = [];

	this.selectTab = function(setTab){
		this.tab = setTab;
	};

	this.isSelected = function(checkTab){
		// verifica se è true la tab selezionata con quella scelta, in quel caso la visualizza 
		return this.tab === checkTab;
	};
	
	$http.get('json/project.json').success(function(data){
		$scope.examInformation = data.project;
		//console.log(exam.information.project[0].descrizione); per leggere la "descrizione" del primo progetto 
		//console.log($scope.examInformation);
		
		$scope.modelExam = $scope.examInformation[0];
		//return $scope.examInformation;

	});
	

}]);

app.directive('curriculumVitae', function(){
	return {
		restrict: 'E',
		templateUrl: 'curriculum.html'
	};
});



