console.log('sourcing client.js');
//hook up NG
var app = angular.module('app', []);

//create controller
app.controller('AssignmentController', ['$scope' ,'$http', function($scope, $http) {
  console.log('NG');
  $scope.getAssignment = function() {
    console.log('in getAssignment. Searching for:', $scope.assignmentIn);
    // var searchUrl = '/assignment?q=' + $scope.assignmentIn;
    $http({
      method: 'GET',
      url: '/assignment?assignment=' + $scope.assignmentIn
    }).then( function( response ) {
      console.log('response:', response);
      $scope.searchResults = response.data;
    });
  }; // end getAssignment
}]); // end controller
