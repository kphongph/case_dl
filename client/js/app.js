'use strict';

angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('person', {
        url: '',
        templateUrl: 'js/person/templates/person.html',
        controller: 'PersonCtrl'
      });
    $urlRouterProvider.otherwise('person');
  }]);
