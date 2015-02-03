// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic'])

myApp.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

myApp.config(function($stateProvider, $urlRouterProvider) {
    
  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
    })
    
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
  
  // French
  
    .state('tabs.homefr', {
      url: "/homefr",
      views: {
        'home-tab': {
          templateUrl: "templates/fr/homefr.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
  
    .state('tabs.abc', {
      url: "/abc",
      views: {
        'home-tab': {
          templateUrl: "templates/abc.html",
        }
      }
    })
  
  // Warning view
  
     .state('tabs.warning', {
      url: "/warning",
      views: {
        'home-tab': {
          templateUrl: "templates/warning.html",
        }
      }
    })
  
  // French
  
    .state('tabs.warningfr', {
      url: "/warningfr",
      views: {
        'home-tab': {
          templateUrl: "templates/fr/warningfr.html",
        }
      }
    })
    
  // What is first aid view 
  
    .state('tabs.whatisfirstaid', {
      url: "/whatisfirstaid",
      views: {
        'home-tab': {
          templateUrl: "templates/whatisfirstaid.html",
        }
      }
    })
  
  // French
  
  .state('tabs.whatisfirstaidfr', {
      url: "/whatisfirstaidfr",
      views: {
        'home-tab': {
          templateUrl: "templates/fr/whatisfirstaidfr.html",
        }
      }
    })


  // Good Samaritan view
  
  .state('tabs.goodsamaritan',{
      url: "/goodsamaritan",
      views:{
          'home-tab':{
              templateUrl: "templates/goodsamaritan.html",
          }
      }
  })
  
  // French
  
  .state('tabs.goodsamaritanfr',{
      url: "/goodsamaritanfr",
      views:{
          'home-tab':{
              templateUrl: "templates/fr/goodsamaritanfr.html",
          }
      }
  })
  
  // How will i react view
  
  .state('tabs.howwillireact',{
      url: "/howwillireact",
      views:{
          'home-tab':{
              templateUrl: "templates/howwillireact.html",
          }
      }
  })
  
  // French
  
  .state('tabs.howwillireactfr',{
      url: "/howwillireactfr",
      views:{
          'home-tab':{
              templateUrl: "templates/fr/howwillireactfr.html",
          }
      }
  })
  
  
    .state('tabs.definitions', {
      
      url: "/definitions",
      views: {
        'home-tab': {
          templateUrl: "templates/definitions.html",
        }
      }
    })
   
    .state('tabs.videos', {
      url: "/videos",
      views: {
        'home-tab': {
          templateUrl: "templates/videos.html",
        }
      }
    })
    
    .state('tabs.emergencies', {
      url: "/emergencies",
      views: {
        'emergencies-tab': {
          templateUrl: "templates/emergencies.html",
          controller: 'EmergenciesCtrl'
        }
      }
    })
  
    .state('tabs.asthma',{
      url: "/asthma",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/asthma.html",
          }
      }
  })
  
    .state('tabs.bleeding',{
      url: "/bleeding",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/bleeding.html",
          }
      }
  })
  
    .state('tabs.boneandjointinjuries',{
      url: "/boneandjointinjuries",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/bonejointinjuries.html",
          }
      }
  })
  
  .state('tabs.breathingemergenciessub',{
      url: "/breathingemergenciessub",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/breathingemergenciessub.html",
          }
      }
  })
  

    .state('tabs.adultchoking', {
      url: "/adultchoking",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/adultchoking.html",
            
        }
      }
    })
  
    .state('tabs.infantchoking', {
      url: "/infantchoking",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/infantchoking.html",
        }
      }
    })
  
  .state('tabs.burns',{
      url: "/burns",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/burns.html",
          }
      }
  })
  
  .state('tabs.cpr',{
      url: "/cpr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/cpr.html",
          }
      }
  })
  
  .state('tabs.diabetes',{
      url: "/diabetes",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/diabetes.html",
          }
      }
  })
  
  .state('tabs.heartattack',{
      url: "/heartattack",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/heartattack.html",
          }
      }
  })
  
  .state('tabs.seizures',{
      url: "/seizures",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/seizures.html",
          }
      }
  })
  
  .state('tabs.severeallergicreactions',{
      url: "/severeallergicreactions",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/severeallergicreactions.html",
          }
      }
  })
  
  .state('tabs.shock',{
      url: "/shock",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/shock.html",
          }
      }
  })
  
  .state('tabs.strokes',{
      url: "/strokes",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/strokes.html",
          }
      }
  })
    
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html",
          controller: 'AboutCtrl'
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

});

myApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom'); //other values: top
$ionicConfigProvider.views.maxCache(0);
    
});
