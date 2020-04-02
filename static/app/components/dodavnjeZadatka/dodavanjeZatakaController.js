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

      this.srediDatum = function() {
        mysqlDateFormat = that.noviZadatak.datum_provere
          .toISOString()
          .slice(0, 19)
          .replace("T", " ");
        console.log(mysqlDateFormat);
        console.log("blabla");
        that.noviZadatak.datum_provere = mysqlDateFormat;
      };

      // const datumElement = document.querySelector("#datum");
      // datumElement.min = new Date();
      // console.log(datumElement);

      this.dodajNoviZadatak = function() {
        that.srediDatum();
        $http.post("/api/dodajZadatak", that.noviZadatak).then(
          function(response) {
            console.log("Uspijesno dodat novi zadatak...");
            $state.go("home");
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.dobaviPredemte();
    }
  ]);
})(angular);
