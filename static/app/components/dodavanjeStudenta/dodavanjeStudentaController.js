(function(angular) {
  let app = angular.module("app").controller("dodavanjeStudentaController", [
    "$http",
    "$state",
    "$stateParams",
    function($http, $state, $stateParams) {
      let that = this;

      this.noviStudent = {
        indeks: "",
        ime: "",
        prezime: ""
      };

      this.dodajStudenta = function() {
        $http.post("/api/dodajStudenta", that.noviStudent).then(
          function(response) {
            console.log("Student dodat!");
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
