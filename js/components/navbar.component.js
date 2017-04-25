(function () {
  'use strict'

  angular.module('app')
    .component('navbar', {
      templateUrl: '/js/templates/navbar.html',
      controller: NavbarController
    })

  function NavbarController() {
    const vm = this
    vm.$onInit = function () {
    }
  }
}())
