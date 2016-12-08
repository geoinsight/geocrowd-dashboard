'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('geocrowdApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
