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
        
      
    
      
        
    .state('addContenders(1v1)', {
      url: '/mantomanfight',
      templateUrl: 'templates/addContenders(1v1).html',
      controller: 'addContenders(1v1)Ctrl'
    })
        
      
    
      
        
    .state('w/FRIENDS.addContenders(W/FRIENDS)', {
      url: '/addfriends',
      views: {
        'tab7': {
          templateUrl: 'templates/addContenders(W/FRIENDS).html',
          controller: 'addContenders(W/FRIENDS)Ctrl'
        }
      }
    })
        
      
    
      
        
    .state('w/FRIENDS.who&#x27;STurn?', {
      url: '/counter',
      views: {
        'tab8': {
          templateUrl: 'templates/who&#x27;STurn?.html',
          controller: 'who&#x27;STurn?Ctrl'
        }
      }
    })
        
      
    
      
    .state('w/FRIENDS', {
      url: '/withfriends',
      abstract:true,
      templateUrl: 'templates/w/FRIENDS.html'
    })
      
    
      
        
    .state('duelResult', {
      url: '/duelresult',
      templateUrl: 'templates/duelResult.html',
      controller: 'duelResultCtrl'
    })
        
      
    
      
        
    .state('league.addContenders(League)', {
      url: '/addleague',
      views: {
        'tab9': {
          templateUrl: 'templates/addContenders(League).html',
          controller: 'addContenders(League)Ctrl'
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