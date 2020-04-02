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
        })
        .state({
          name: "updatePredmeta",
          url: "/updatePredmeta/{id}",
          templateUrl: "app/components/izmjenaPredmet/izmjenaPredmeta.tpl.html",
          controller: "predmetUpdateController",
          controllerAs: "ctrl"
        })
        .state({
          name: "dodajStudenta",
          url: "/dodajStudenta",
          templateUrl:
            "app/components/dodavanjeStudenta/dodavanjeStudenta.tpl.html",
          controller: "dodavanjeStudentaController",
          controllerAs: "ctrl"
        })
        .state({
          name: "dodajPredmet",
          url: "/dodajPredmet",
          templateUrl:
            "app/components/dodavanjePredmeta/dodavanjePredmeta.tpl.html",
          controller: "dodavanjePredmetaController",
          controllerAs: "ctrl"
        })
        .state({
          name: "dodajZadatak",
          url: "/dodajZadatak",
          templateUrl:
            "app/components/dodavnjeZadatka/dodavanjeZadatka.tpl.html",
          controller: "dodavanjeZadatkaController",
          controllerAs: "ctrl"
        })
        .state({
          name: "prikaziZadatak",
          url: "/prikaziZadatak",
          templateUrl: "app/components/prikazZadataka/prikazZadataka.tpl.html",
          controller: "prikazZadatkaController",
          controllerAs: "ctrl"
        })
        .state({
          name: "updateZadatak",
          url: "/updateZadatak/{id}",
          templateUrl: "app/components/izmjenaZadatka/izmjenaZadatka.tpl.html",
          controller: "zadatakUpdateController",
          controllerAs: "ctrl"
        });

      $urlRouterProvider.otherwise("/");
    }
  ]);
})(angular);
