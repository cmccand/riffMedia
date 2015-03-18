(function () {
  "use strict";
  angular.module('RiffApp')
  .factory('RiffService', function ($http) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/chrismccand';
    //var riffs = [];

    // var getAllRiffs = function () {
    //   // return $http.get(url);
    //   return riffs;
    // };
    var getRiffs = function () {
      return $http.get(url);
    };

    var addMyRiffs = function (newRiff) {
      $http.post(url, newRiff);
    };



  return {
    getRiffs: getRiffs,
    addRiffs: addMyRiffs
  };

});

})();
