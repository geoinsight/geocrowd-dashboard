'use strict';
const angular = require('angular');
import SignupController from './signup.controller';

export default angular.module('geocrowdApp.signup', [])
    .controller('SignupController', SignupController)
    .name;
