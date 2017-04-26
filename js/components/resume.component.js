(function () {
  'use strict'

  angular.module('app')
    .component('resume', {
      templateUrl: '/js/templates/resume.html',
      controller: ResumeController
    })

  function ResumeController() {
    const vm = this
    vm.$onInit = function () {
    }
  }
}())
