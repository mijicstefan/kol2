(function(angular) {
  let app = angular.module("app").controller("prikazZadatkaController", [
    "$http",
    "$state",
    function($http, $state) {
      let that = this;
      this.dobaviZadatke = function() {
        $http.get("/api/dobaviSveZadatke").then(
          function(response) {
            that.zadaci = response.data;

            console.log(that.zadaci);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.dobaviSvePredmete = function() {
        $http.get("/api/dobaviPredmete").then(
          function(response) {
            that.predmeti = response.data;
          },
          function(reason) {
            console.log(reason);
          }
        );
      };
      this.dobaviZadatke();
      this.dobaviSvePredmete();

      this.obrisiZadatak = function(id) {
        $http.delete("/api/obrisiZadatak/" + id).then(
          function(response) {
            console.log(response);
            that.dobaviZadatke();
            that.dobaviSvePredmete();
          },
          function(reason) {
            console.log(reason);
          }
        );
      };
    }
  ]);
})(angular);

// let zadaciPrettified = that.zadaci.map(function(zadatak) {
//   that.predmeti.forEach(function(predmet) {
//     if (zadatak.predmet_id === predmet.id) {
//       zadatk["nazivPredmeta"] = predmet.naziv;
//     }
//   });
//   return zadatak;
// });
// console.log(zadaciPrettified);
