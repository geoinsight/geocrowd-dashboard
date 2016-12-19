'use strict';

angular.module('geocrowdApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('test', {
        url: '/test',
        template: '<test></test>'
      });
  });
