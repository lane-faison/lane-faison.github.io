(function () {
  'use strict'

  angular.module('app')
    .component('navbar', {
      templateUrl: '/js/templates/navbar.html',
      controller: NavbarController
    })

  function NavbarController() {
    const vm = this
    vm.getClass = function (path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }

    vm.$onInit = function () {
    }
  }
}())
