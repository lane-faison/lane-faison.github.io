(function () {
  'use strict'

  angular.module('app')
    .component('contact', {
      templateUrl: '/js/templates/contact.html',
      controller: ContactController
    })

  function ContactController() {
    const vm = this

    vm.$onInit = function () {
    }
  }
}())
