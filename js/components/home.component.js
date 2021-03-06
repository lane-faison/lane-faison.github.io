(function () {
  'use strict'

  angular.module('app')
    .component('home', {
      templateUrl: '/js/templates/home.html',
      controller: HomeController
    })

  function HomeController() {
    const vm = this

    vm.skills_FED = ["HTML5","CSS3","JavaScript","AngularJS","jQuery","Bootstrap","Adobe Photoshop"]

    vm.skills_BED = ["Node.js","Knex.js","Express","SQL","PostgreSQL","AJAX","JSON"]

    vm.skills_Management = ["GitHub","git","Firebase","Heroku","Atom","Balsamiq","Excel"]

    vm.skills_Mobile = ["Swift 3","Xcode","Core Data","Core Location","Apple Maps SDK","Facebook SDK","Google Maps API","Google Places API","Google Cloud Vision API","CocoaPods","Alamofire","AutoLayout"]

    vm.jobs = [
      {title: "iOS Engineer", company: "Gloo", date: "July 2017 - Present"},
      {title: "Full Stack Web Developer student", company: "Galvanize, Inc.", date: "January 2017 - June 2017"},
      {title: "Sr. Technical Recruiter", company: "Talent Navigation Experts", date: "June 2015 - January 2017"},
      {title: "Ski Instructor", company: "Vail Resorts", date: "December 2013 - March 2015"},
      {title: "Sergeant", company: "United States Marine Corps", date: "March 2008 - January 2012"}
    ]

    vm.schools = [
      {school: "Galvanize, Inc.", concentration: "Full Stack Web Development Immersive", date: "Graduated June 2017"},
      {school: "University of Colorado at Boulder", concentration: "B.A. Mathematics", date: "Graduated May 2015"}
    ]

    vm.$onInit = function () {
    }
  }
}())
