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
        controller: 'HomeTabCtrl'
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
  
  //Emergencies view
  
    .state('tabs.emergencies', {
      url: "/emergencies",
      views: {
        'emergencies-tab': {
          templateUrl: "templates/emergencies.html",
          controller: 'EmergenciesCtrl'
        }
      }
    })
  
  // French
  
    .state('tabs.emergenciesfr', {
      url: "/emergenciesfr",
      views: {
        'emergencies-tab': {
          templateUrl: "templates/fr/emergenciesfr.html",
          controller: 'EmergenciesCtrl'
        }
      }
    })
  
  // Asthma view
  
    .state('tabs.asthma',{
      url: "/asthma",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/asthma.html",
          }
      }
  })
  
  // French
  
    .state('tabs.asthmafr',{
      url: "/asthmafr",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/fr/asthmafr.html",
          }
      }
  })
  
  // Bleeding view
  
    .state('tabs.bleeding',{
      url: "/bleeding",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/bleeding.html",
          }
      }
  })
  
  // French
  
  .state('tabs.bleedingfr',{
      url: "/bleedingfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/bleedingfr.html",
          }
      }
  })
  
  //Bone and Joint Injuries view
  
    .state('tabs.boneandjointinjuries',{
      url: "/boneandjointinjuries",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/bonejointinjuries.html",
          }
      }
  })
  
  //French
  
    .state('tabs.boneandjointinjuriesfr',{
      url: "/boneandjointinjuriesfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/bonejointinjuriesfr.html",
          }
      }
  })
  
  // Breathing Emergencies sub menu view
  
  .state('tabs.breathingemergenciessub',{
      url: "/breathingemergenciessub",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/breathingemergenciessub.html",
          }
      }
  })
  
  // French
  
  .state('tabs.breathingemergenciessubfr',{
      url: "/breathingemergenciessubfr",
      views: {
          'emergencies-tab':{
              templateUrl: "templates/fr/breathingemergenciessubfr.html",
          }
      }
  })
  
  // Adult Choking view
  
    .state('tabs.adultchoking', {
      url: "/adultchoking",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/adultchoking.html",
            
        }
      }
    })
  
  // French
  
    .state('tabs.adultchokingfr', {
      url: "/adultchokingfr",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/fr/adultchokingfr.html",
            
        }
      }
    })
  
  // Infant Choking view
  
    .state('tabs.infantchoking', {
      url: "/infantchoking",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/infantchoking.html",
        }
      }
    })
  
  // French
  
    .state('tabs.infantchokingfr', {
      url: "/infantchokingfr",
      views: {
        'emergencies-tab': {
            templateUrl: "templates/fr/infantchokingfr.html",
        }
      }
    })
  
  // Burns view
  
  .state('tabs.burns',{
      url: "/burns",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/burns.html",
          }
      }
  })
  
  // French
  
  .state('tabs.burnsfr',{
      url: "/burnsfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/burnsfr.html",
          }
      }
  })
  
  // CPR view
  
  .state('tabs.cpr',{
      url: "/cpr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/cpr.html",
          }
      }
  })
  
  // French
  
  .state('tabs.cprfr',{
      url: "/cprfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/cprfr.html",
          }
      }
  })
  
  // Diabetes view
  
  .state('tabs.diabetes',{
      url: "/diabetes",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/diabetes.html",
          }
      }
  })
  
  // French
  
  .state('tabs.diabetesfr',{
      url: "/diabetesfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/diabetesfr.html",
          }
      }
  })
  
  // Heart Attack view
  
  .state('tabs.heartattack',{
      url: "/heartattack",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/heartattack.html",
          }
      }
  })
  
  // French
  
  .state('tabs.heartattackfr',{
      url: "/heartattackfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/heartattackfr.html",
          }
      }
  })
  
  // Seizures view
  
  .state('tabs.seizures',{
      url: "/seizures",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/seizures.html",
          }
      }
  })
  
  // French
  
  .state('tabs.seizuresfr',{
      url: "/seizuresfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/seizuresfr.html",
          }
      }
  })
  
  // Severe Allergic reactions
  
  .state('tabs.severeallergicreactions',{
      url: "/severeallergicreactions",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/severeallergicreactions.html",
          }
      }
  })
  
  // French
  
  .state('tabs.severeallergicreactionsfr',{
      url: "/severeallergicreactionsfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/severeallergicreactionsfr.html",
          }
      }
  })
  
  // Shock view
  
  .state('tabs.shock',{
      url: "/shock",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/shock.html",
          }
      }
  })
  
  // French
  
  .state('tabs.shockfr',{
      url: "/shockfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/shockfr.html",
          }
      }
  })
  
  // Strokes view
  
  .state('tabs.strokes',{
      url: "/strokes",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/strokes.html",
          }
      }
  })
  
  // French
  
  .state('tabs.strokesfr',{
      url: "/strokesfr",
      views:{
          'emergencies-tab':{
              templateUrl: "templates/fr/strokesfr.html",
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
