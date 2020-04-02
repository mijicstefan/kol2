(function(angular) {
  let app = angular.module("app").controller("zadatakUpdateController", [
    "$http",
    "$state",
    "$stateParams",
    function($http, $state, $stateParams) {
      let that = this;

      this.dobaviPredemte = function() {
        $http.get("/api/dobaviPredmete").then(
          function(response) {
            that.predmeti = response.data;
            console.log(that.predmeti);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.dobaviZadatak = function(id) {
        $http.get("/api/dobaviJedanZadatak/" + id).then(
          function(response) {
            that.noviZadatak = response.data;
            console.log("Student dobavljen.");
            console.log(response.data);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.izmeniStudenta = function(id) {
        $http.put("/api/updateZadatak/" + id, that.noviZadatak).then(
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
        that.izmeniStudenta($stateParams["id"]);
        console.log($stateParams["id"]);
        console.log(typeof $stateParams);
      };

      this.dobaviZadatak($stateParams["id"]);
      this.dobaviPredemte();
    }
  ]);
})(angular);
