(function () {
  "use strict";

  angular.module('RiffApp', [
  'ngTransloadit'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'main.html',
      controller: 'RiffController as riffCtrl'
    })

  })

  .config(function ($routeProvider) {
    $routeProvider
    .when('/upload', {
      templateUrl: 'upload.html',
      controller: 'RiffController as riffCtrl'
    })


  });

})();
