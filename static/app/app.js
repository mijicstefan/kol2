(function(angular) {
  let app = angular.module("app", ["ui.router"]);

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state({
        name: "home",
        url: "/",
        templateUrl: "app/components/homePage.tpl.html",
        controller: "homePageController",
        controllerAs: "ctrl"
      });

      $urlRouterProvider.otherwise("/");
    }
  ]);
})(angular);
