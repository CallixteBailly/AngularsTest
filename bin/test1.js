angular.module('MyApp',[])
.controller('controller1',function($scope){
	$scope.message = "Hello world"
	$scope.message2 = "Show"
	$show = false
	$scope.onClick = function(){
			$scope.message = $scope.message + " !" 

	};
	$scope.onHide = function(){
			if ($show == true)
			{
				$scope.message2 = ""
				$show = false
			}
			else
			{
				$scope.message2 = "Show"
				$show = true
			}
	}
	
	
});