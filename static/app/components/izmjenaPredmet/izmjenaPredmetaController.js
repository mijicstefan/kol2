(function(angular) {
  let app = angular.module("app").controller("predmetUpdateController", [
    "$http",
    "$state",
    "$stateParams",
    function($http, $state, $stateParams) {
      let that = this;

      this.dobaviPredmet = function(id) {
        $http.get("/api/dobaviJedanPredmet/" + id).then(
          function(response) {
            that.noviPredmet = response.data;
            console.log("Predmet dobavljen.");
            console.log(response.data);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.izmeniPredmet = function(id) {
        $http.put("/api/updatePredmet/" + id, that.noviPredmet).then(
          function(response) {
            console.log("Usao u response!");
            $state.go("home");
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.wrapperFunction = function() {
        that.izmeniPredmet($stateParams["id"]);
        console.log($stateParams["id"]);
        console.log(typeof $stateParams);
      };

      this.dobaviPredmet($stateParams["id"]);
    }
  ]);
})(angular);
