console.log('sourcing client.js');
//hook up NG
var app = angular.module('app', []);

//create controller
app.controller('AssignmentController', ['$scope' ,'$http', function($scope, $http) {
  console.log('NG');
  $scope.getAssignment = function() {
    console.log('in getAssignment. Searching for:', $scope.assignmentSearchIn);
    // var searchUrl = '/assignment?q=' + $scope.assignmentIn;
    $http({
      method: 'GET',
      url: '/assignment?assignment=' + $scope.assignmentIn
    }).then( function( response ) {
      console.log('response:', response);
      $scope.searchResults = response.data;
    });
  }; // end getAssignment

  $scope.postAssignment = function(req, res) {
    console.log('in postAssignment');
    var objectToSend = {
      assignment_name: $scope.assignmentIn,
      student_name: $scope.studentIn,
      score: $scope.scoreIn,
      completed: $scope.completedIn
    }; // end objectToSend
    console.log(objectToSend);
    $http({
      method: 'POST',
      url: '/assignment',
      data: objectToSend
    }).then(function(response) {
      console.log(response);
    }); // end $http POST
  }; // end postAssignment
}]); // end controller
