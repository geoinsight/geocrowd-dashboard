'use strict';

angular.module('geocrowdApp.auth', ['geocrowdApp.constants', 'geocrowdApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
