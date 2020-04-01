(function(angular) {
  let app = angular.module("app", ["ui.router"]);

  app.config([
    "$stateProvider",
    "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
          name: "home",
          url: "/",
          templateUrl: "app/components/homepage/homePage.tpl.html",
          controller: "homePageController",
          controllerAs: "ctrl"
        })
        .state({
          name: "updateStudenta",
          url: "/updateStudenta/{id}",
          templateUrl: "app/components/izmjenaStudent/izmjenaStudenta.tpl.html",
          controller: "studentUpdateController",
          controllerAs: "ctrl"
        });

      $urlRouterProvider.otherwise("/");
    }
  ]);
})(angular);
