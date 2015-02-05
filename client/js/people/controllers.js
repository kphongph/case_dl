'use strict';

angular
  .module('app')
  .controller('PeopleCtrl', ['$scope', '$state', 'People', function($scope,
      $state, People) {
    $scope.todos = [];
    function getPeople() {
      People
        .find()
        .$promise
        .then(function(results) {
          $scope.people = results;
        });
    }
    getPeople();

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
  }]);
