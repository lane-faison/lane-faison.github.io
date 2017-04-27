(function () {
  'use strict'

  angular.module('app')
    .component('navbar', {
      templateUrl: '/js/templates/navbar.html',
      controller: NavbarController
    })

  function NavbarController($location) {
    const vm = this

    vm.$onInit = function () {
    }

    vm.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    }
  }
}())
