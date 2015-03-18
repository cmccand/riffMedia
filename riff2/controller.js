(function () {
  "use strict";
  // angular.module('RiffApp')
  // .controller('RiffController', function(RiffService,$location) {
  //   var riffCtrl = this;

  angular.module('RiffApp')
  .controller('RiffController', ['Transloadit', (function(RiffService, Transloadit) {
    var riffCtrl = this;

    riffCtrl.upload = RiffService.upload();

    RiffService.getRiffs().success(function(data) {
      riffCtrl.riffs = data;
      });


    // riffCtrl.riffs = RiffService.getRiffs();
    // riffCtrl.newRiff = {};
    //
    // RiffService.getRiffs().success(function(data) {
    // riffCtrl.riffs = data;
    // });
    //
    // riffCtrl.addMyRiffs = function(newRiff) {
    //   RiffService.addRiffs(newRiff);
    //   riffCtrl.newRiff = {};
    //   $location.path('/');
    // };



  });
})();
