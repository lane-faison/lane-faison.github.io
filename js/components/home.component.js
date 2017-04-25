(function () {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: '/js/templates/home.html',
      controller: HomeController
    })

  function HomeController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())
