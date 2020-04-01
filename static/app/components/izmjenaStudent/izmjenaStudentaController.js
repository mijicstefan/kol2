(function(angular) {
  let app = angular.module("app").controller("studentUpdateController", [
    "$http",
    "$state",
    "$stateParams",
    function($http, $state, $stateParams) {
      let that = this;

      this.dobaviStudenta = function(id) {
        $http.get("/api/dobaviJednogStudenta/" + id).then(
          function(response) {
            that.noviStudent = response.data;
            console.log("Student dobavljen.");
            console.log(response.data);
          },
          function(reason) {
            console.log(reason);
          }
        );
      };

      this.izmeniStudenta = function(id) {
        $http.put("/api/updateStudenta/" + id, that.noviStudent).then(
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

      this.dobaviStudenta($stateParams["id"]);
    }
  ]);
})(angular);
