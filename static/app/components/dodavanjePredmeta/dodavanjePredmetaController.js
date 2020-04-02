(function(angular) {
  let app = angular.module("app").controller("dodavanjePredmetaController", [
    "$http",
    "$state",
    function($http, $state) {
      let that = this;
      this.noviPredmet = {
        naziv: "",
        skracenica: ""
      };
      this.predmeti = [];

      this.dodajNoviPredmet = function() {
        $http.post("/api/dodajPredmet", that.noviPredmet).then(
          function(response) {
            console.log("Uspijesno dodat novi predmet...");
            $state.go("home");
          },
          function(reason) {
            console.log(reason);
          }
        );
      };
    }
  ]);
})(angular);
