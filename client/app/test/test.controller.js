'use strict';

(function(){

class TestComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('geocrowdApp')
  .component('test', {
    templateUrl: 'app/test/test.html',
    controller: TestComponent,
    controllerAs: 'testCtrl'
  });

})();
