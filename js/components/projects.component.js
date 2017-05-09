(function () {
  'use strict'

  angular.module('app')
    .component('projects', {
      templateUrl: '/js/templates/projects.html',
      controller: ProjectsController
    })

  function ProjectsController() {
    const vm = this

    vm.mobileProjects = [
      {title: 'RunningSocial', description: 'This iOS application was built entirely in Swift 3 for my 3rd quarter group project. This application allows users to login and create their own organized runs that other users are able to see conveniently plotted on a map. My deep passion for mobile development began with this application.', image_url:'/assets/images/logos-projects/runningsocial.png', project_url:'#'}
    ]

    vm.webProjects = [
      {title: 'Mario Kart Cheats!', description: 'This AngularJS application lets users quickly interact with the various posts on the site. Users can search and filter results as well as vote on a post.', image_url:'/assets/images/logos-projects/mariokart.png', project_url:'https://mario-kart-cheats.herokuapp.com/'},

      {title: 'gReads A Lot', description: 'This application allows users to interact with and search a database full of authors and books, as well as create their own authors and books.', image_url:'/assets/images/logos-projects/greads.png', project_url:'https://g-reads-alot.herokuapp.com/index.html'},

      {title: 'gDrinks', description: 'This goal of this project was to create an interactive site that allows the user to add, edit, and delete recipes.', image_url:'/assets/images/logos-projects/drink2.png', project_url:'https://gdrinks-d4c1b.firebaseapp.com/index.html'},

      {title: 'Movie Ratings', description: 'The goal of this project was to create a site where the user can create, read, update, and delete movies from the database.', image_url:'/assets/images/logos-projects/cinema.png', project_url:'https://salty-chamber-44152.herokuapp.com/home.html'},

      {title: 'galvanize Eats', description: 'This site was built as a 1-day project. My goal was to build a site for "Galvanize Eats" that used APIs to get a menu and post a customer\'s order.', image_url:'/assets/images/logos-projects/galvanizeEats.png', project_url:'https://galvanizeeats-4818e.firebaseapp.com/'},

      {title: 'myDriveway', description: 'This site was both designed and built by me for my Q1 project in the Galvanize web development program.', image_url:'/assets/images/logos-projects/myDriveway.png', project_url:'https://mydriveway-3a5e0.firebaseapp.com/'}
    ]

    vm.$onInit = function () {
    }
  }
}())
