angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('dash', {
      url: '/dash',
      templateUrl: 'templates/dash.html',
      controller: 'dashCtrl'
    })
        
      
    
      
        
    .state('addContenders1v1', {
      url: '/mantomanfight',
      templateUrl: 'templates/addContenders1v1.html',
      controller: 'addContenders1v1Ctrl'
    })
        
      
    
      
        
    .state('FRIENDS.addContenderswithFRIENDS', {
      url: '/addfriends',
      views: {
        'tab7': {
          templateUrl: 'templates/addContenderswithFRIENDS.html',
          controller: 'addContenderswithFRIENDSCtrl'
        }
      }
    })
        
      
    
      
        
    .state('FRIENDS.counter', {
      url: '/counter',
      views: {
        'tab8': {
          templateUrl: 'templates/counter.html',
          controller: 'counterCtrl'
        }
      }
    })
        
      
    
      
    .state('FRIENDS', {
      url: '/withfriends',
      abstract:true,
      templateUrl: 'templates/FRIENDS.html'
    })
      
    
      
        
    .state('duelResult', {
      url: '/duelresult',
      templateUrl: 'templates/duelResult.html',
      controller: 'duelResultCtrl'
    })
        
      
    
      
        
    .state('league.addContendersLeague', {
      url: '/addleague',
      views: {
        'tab9': {
          templateUrl: 'templates/addContendersLeague.html',
          controller: 'addContendersLeagueCtrl'
        }
      }
    })
        
      
    
      
        
    .state('league.fixtures', {
      url: '/fixtures',
      views: {
        'tab11': {
          templateUrl: 'templates/fixtures.html',
          controller: 'fixturesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('league.leaderboard', {
      url: '/leaderboard',
      views: {
        'tab12': {
          templateUrl: 'templates/leaderboard.html',
          controller: 'leaderboardCtrl'
        }
      }
    })
        
      
    
      
    .state('league', {
      url: '/league',
      abstract:true,
      templateUrl: 'templates/league.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dash');

});