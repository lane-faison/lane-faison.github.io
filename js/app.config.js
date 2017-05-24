(function () {
  'use strict'

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(false)
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'projects',
        url: '/projects',
        component: 'projects',
      })
      .state({
        name: 'resume',
        url: '/resume',
        component: 'resume',
      })
      .state({
        name: 'contact',
        url: '/contact',
        component: 'contact',
      })
      .otherwise('/')
  }
}())
