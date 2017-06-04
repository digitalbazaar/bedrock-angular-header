/*!
 * Header module.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import angular from 'angular';
import HeaderComponent from './header-component.js';

const module = angular.module('bedrock.header', []);

module.component('brHeader', HeaderComponent);
