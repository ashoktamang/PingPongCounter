angular.module('app.controllers', [])
  
.controller('dashCtrl', function($scope) {

})
   
.controller('addContenders1v1Ctrl', function($scope) {

})
   
.controller('addContenderswithFRIENDSCtrl', function($scope) {
	$scope.contender_name = "";
	$scope.contendersList = [];
	$scope.addContender = function(contender_name) {
		console.log(contender_name);
		if ($scope.contendersList.indexOf(contender_name) != -1) {
			console.log("Error!");
		} else {
			$scope.contendersList.push(contender_name);
		}
		console.log($scope.contendersList);
	};

	console.log($scope.contendersList);
})
   
.controller('counterCtrl', function($scope) {

})
      
.controller('duelResultCtrl', function($scope) {

})
   
.controller('addContendersLeagueCtrl', function($scope) {

})
   
.controller('fixturesCtrl', function($scope) {

})
   
.controller('leaderboardCtrl', function($scope) {

})
    