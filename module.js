/* My modules */

var app = angular.module("myApp", []);


/* Controller */
app.controller
(
	"myController", 
	[
		'$scope',
		function($scope)
		{
			/* Medina's Junkyard Owner Information */
			$scope.firstName = "Mario";
			$scope.lastName = "Medina";
			$scope.birthyear = 1992;
			
			$scope.donator = {};
			
			/* Update the donator information with user input */
			$scope.update = function(customer)
			{
				$scope.donator = angular.copy(customer)
			};
		}
	]
);
