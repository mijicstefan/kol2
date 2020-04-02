(function(angular) {
  let app = angular.module("app").controller("homePageController", [
    "$http",
    function($http) {
      let that = this;
      let students = [];
      let predmeti = [];

      this.dobaviSvePredmete = function() {
        $http.get("/api/dobaviPredmete").then(
          function(response) {
            that.predmeti = response.data;
            console.log(response.data);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.obrisiStudenta = function(id) {
        $http.delete("/api/obrisiStudenta/" + id).then(
          function(response) {
            that.loadInitData();
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.dobaviSveStudente = function() {
        $http.get("/api/dobaviSveStudente").then(
          function(response) {
            that.students = response.data;
            console.log(response.data);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.obrisiPredmet = function(id) {
        $http.delete("/api/obrisiJedanPredmet/" + id).then(
          function(response) {
            that.loadInitData();
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.loadInitData = function() {
        that.dobaviSvePredmete();
        that.dobaviSveStudente();
      };

      this.loadInitData();
    }
  ]);
})(angular);
