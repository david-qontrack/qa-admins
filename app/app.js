main-app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/',
        {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        });
    $routeProvider.when('/login',
        {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });
    $routeProvider.when('/register',
        {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'
        });

    $routeProvider.when('/404',
        {
            templateUrl: 'partials/404.html'
        });
    $routeProvider.otherwise({redirectTo: '/404'});

    //$locationProvider.html5Mode(true);

}])