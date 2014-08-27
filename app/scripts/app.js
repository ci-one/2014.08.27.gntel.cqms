'use strict';

angular.module('gntelCqmsApp', [
    'ngRoute',
    'ui.bootstrap'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/contents/052_M_1000_login.html'
            })
            .when('/home', {
                redirectTo: '/quality/weather_chart'
            })
            .when('/login', {
                redirectTo: '/quality/weather_chart'
            })
            .when('/quality/weather_chart', {
                templateUrl: '../views/contents/052_S_2100_quality.weather.chart.html'
            })
            .when('/probe/list', {
                templateUrl: 'views/contents/052_S_2110_probe.list.html'
            })
            .when('/probe/plcy_list', {
                templateUrl: 'views/contents/052_S_2210_probe.plcy.list.html'
            })
            .when('/admin/user', {
                templateUrl: 'views/contents/052_S_3100_admin.user.html'
            })
            .when('/admin/access', {
                templateUrl: 'views/contents/052_S_3200_admin.access.html'
            })
            .when('/admin/org', {
                templateUrl: 'views/contents/052_S_3300_admin.org.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });