(function(angular) {
  let app = angular.module("app").controller("dodavanjeZadatkaController", [
    "$http",
    "$state",
    function($http, $state) {
      let that = this;
      this.noviZadatak = {
        predmet_id: "",
        naslov: "",
        sadrzaj: "",
        datum_provere: ""
      };

      this.dodajNoviZadatak = function() {
        $http.post("/api/dodajPredmet", that.noviZadatak).then(
          function(response) {
            console.log("Uspijesno dodat novi zadatak...");
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
