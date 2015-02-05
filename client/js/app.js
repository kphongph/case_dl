'use strict';

angular
  .module('app', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('people', {
        url: '',
        templateUrl: 'js/people/templates/people.html',
        controller: 'PeopleCtrl'
      });
    $urlRouterProvider.otherwise('people');
  }]);
