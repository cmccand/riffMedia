(function () {
  "use strict";
  // angular.module('RiffApp')
  // .factory('RiffService', function ($http) {
  //
  //   var url = 'http://tiy-fee-rest.herokuapp.com/collections/chrismccand';

    angular.module('RiffApp')
    .factory('RiffService', function ($http))

          upload: function(file) {
            Transloadit.upload(file, {
              params: {
                auth: {
                  key: '3fc15a20ca2e11e48bc16127f130ee3d'
                },

                template_id: 'my-template-id'
              },

          signature: function(callback) {
            // ideally you would be generating this on the fly somewhere
            callback('here-is-my-signature');
          },

          progress: function(loaded, total) {
            console.log(loaded + 'bytes loaded');
            console.log(total + ' bytes total');
          },

          processing: function() {
            console.log('done uploading, started processing');
          },

          uploaded: function(assemblyJson) {
            console.log(assemblyJson);
          },

          error: function(error) {
            console.log(error);
          }
        });
      }
    }]);
    // //var riffs = [];
    //
    // // var getAllRiffs = function () {
    // //   // return $http.get(url);
    // //   return riffs;
    // // };
    // var getRiffs = function () {
    //   return $http.get(url);
    // };
    //
    // var addMyRiffs = function (newRiff) {
    //   $http.post(url, newRiff);
    // };



  return {
    getRiffs: getRiffs,
    addRiffs: addMyRiffs
  };

});

})();
