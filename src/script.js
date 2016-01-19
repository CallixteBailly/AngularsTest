// Code goes here
var app = angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
  .controller('contenaireCtrl', function($scope) {
    $scope.tabs = [{
      title: 'HOME',
      content: 'home.html'
    }, {
      title: 'Contact',
      content: 'contact.html'
    }, {
      title: 'Login',
      content: 'login.html'
    }];
  })
  .controller('homeController', function($scope) {
    $scope.message = "Home page";
  })
  .controller('contactController', function($scope) {
    $scope.message = "Contact page";
    $scope.msg = "You Application !"
  })
  .controller('AlertControlle', function($scope) {
    $scope.alerts = [{
      type: 'success',
      msg: 'Hello AngularsJs.'
    }];

    $scope.i = 0
    $scope.addAlert = function() {
      $scope.i++
        $scope.alerts.push({
          type: 'danger',
          msg: 'Alert (' + $scope.i + ')'
        });
    };

    $scope.singleModel = 1;
    $scope.state = "Add sucess !"
    $scope.hide = function() {
      if (!$scope.singleModel) {
        $scope.alerts.push({
          type: '',
          msg: 'Success !'
        });
        $scope.state = "Delete sucess !"
      } else {
        $scope.alerts.splice($scope.i + 1, 1);
        $scope.isHide = false
        $scope.state = "Add sucess !"
      }
    }

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
      $scope.i--;
    };
  });
app.controller('controller1', function($scope) {
  $scope.message = "Hello world"
  $scope.message2 = "Show"
  $show = false
  $scope.onClick = function() {
    $scope.message = $scope.message + " !"

  };
  $scope.onHide = function() {
    if ($show === true) {
      $scope.message2 = ""
      $show = false
    } else {
      $scope.message2 = "Show"
      $show = true
    }
  }
});
