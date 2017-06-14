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
      {title: 'MaxTrax', description: 'This iOS application was my final Capstone project for the Galvanize Web Development program. This application is designed for gym-goers who like to keep track of their goals, whether it be for different lifts, runs, visits per month to a gym, or even how many fruits and vegetables they eat per month. Elaborate meal prep plans and confusing workout plans are cumbersome to follow, so this is where MaxTrax comes in. This application was built with Swift 3, Google Cloud Vision API (for object recognition), Google Places API, and Apple\'s Core Location and Core Data APIs.', image_url:'/assets/images/logos-projects/MaxTrax_Mockup.png', project_url:'https://github.com/lane-faison/Capstone_Project', app_store_url: "https://itunes.apple.com/us/app/maxtrax/id1246964232?mt=8", app_icon_url: "/assets/images/logos-projects/MaxTrax_icon.jpg"},

      {title: 'Halfway Meetup', description: 'This iOS application was a personal project I built in order to help facilitate users in finding a place to meetup for drinks, food, or coffee with another person. This app determines the location of both parties and finds meetup spots in the geographic center. The radius within which the results are returned can be expanded to view more possibilities. This application was built with Swift 3, Google Maps API, Google Places API, Apple\'s Core Location API, and Alamofire.', image_url:'/assets/images/logos-projects/HalfwayMeetupMockup.png', project_url:'https://github.com/lane-faison/Halfway-Meetup', app_store_url: '', app_icon_url: ""},

      {title: 'RunningSocial', description: 'This iOS application, which utilizes the Apple Maps SDK, was built entirely in Swift 3 for my 3rd quarter group project. This application allows users to login and create their own organized runs that other users are able to see conveniently plotted on a map. My deep passion for mobile development began with this application.', image_url:'/assets/images/logos-projects/RunningSocialMockup.png', project_url:'https://github.com/RunningSocial/RunningSocial', app_store_url: '', app_icon_url: ""},

    ]

    vm.webProjects = [
      {title: 'Durable Wealth Management', description: 'Currently re-builing Durable Wealth Management\'s website as one of my side-projects. This site, originally made on WordPress, is being built with AngularJS, HTML5, and CSS3. Due to industry regulations, this site cannot be made public at this time.', image_url:'/assets/images/logos-projects/DWM-logo.png', project_url:'#'},

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
