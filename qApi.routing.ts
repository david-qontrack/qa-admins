import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    var app = angular.module('qApi', ['ngRoute']);

    app.config(function($routeProvider) {
    $routeProvider
   },

   .when('/', {
    templateUrl : '/index.html',
    controller : 'IndexController'
    })
     
    .otherwise({redirectTo: '/'});
    });
    
    app.controller('IndexController', function($scope) {
        $scope.message = 'Welcome to Qontrack API';
        });
];

export const QApiRoutes = RouterModule.forChild(routes);
