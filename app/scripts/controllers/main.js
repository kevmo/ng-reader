'use strict';

app.controller('MainCtrl', function ($scope, $http) {
  $scope.feeds = [{
    url: 'http://dailyjs.com/atom.xml',
    items: [ /* Blog posts go here */ ]
  }];

  $scope.addFeed = function(){};
  $scope.deleteFeed = function(){};

  $scope.addFeed = function(feed){
    $scope.feeds.push(feed);
  };
});
