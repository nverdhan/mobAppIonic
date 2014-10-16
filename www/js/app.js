// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mobAppIonic', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("SelectTestController", function($scope){
  // Data
  $scope.tests = [
                  {id: 0, name: 'Word Gym: GRE', selected: false},
                  {id: 1, name: 'Word Gym: CAT', selected: false}
  ];
  // Functions
  $scope.showTestBody = function(id){ // show dropdown when test is clicked
    for(var i = 0; i < $scope.tests.length; i++){
      if(i!=id){$scope.tests[i].selected = 0};
    }
    $scope.tests[id].selected = !$scope.tests[id].selected;
  }

})
