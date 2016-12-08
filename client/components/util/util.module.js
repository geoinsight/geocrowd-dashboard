'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('geocrowdApp.util', [])
  .factory('Util', UtilService)
  .name;
