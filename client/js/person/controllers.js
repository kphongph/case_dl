angular
  .module('app')
  .controller('PersonCtrl', ['$scope', '$state', 'Person', function($scope,
      $state, Person) {
    $scope.people = [];
    
    function getPeople() {
		console.log("get people");
      Person
        .find({filter:{limit:10}})
        .$promise
        .then(function(results) {
          $scope.people = results;
        });
    }
    getPeople();
    /*
    $scope.addTodo = function() {
      Todo
        .create($scope.newTodo)
        .$promise
        .then(function(todo) {
          $scope.newTodo = '';
          $scope.todoForm.content.$setPristine();
          $('.focus').focus(); //JQuery hack for refocusing text input
          getTodos();
        });
    };

    $scope.removeTodo = function(item) {
      Todo
        .deleteById(item)
        .$promise
        .then(function() {
          getTodos();
        });
    };
    */
  }]);
