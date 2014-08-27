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
                templateUrl: 'views/contents/052_S_2100_quality.weather.chart.html'
            })
            .when('/probe/list', {
                templateUrl: 'views/contents/052_S_2110_probe.list.html'
            })




            //추가:김선규
            .when('/priodic', {
                templateUrl: 'views/contents/052_S_2310_check.priodic.html'
            })
            .when('/priodic/result', {
                templateUrl: 'views/contents/052_S_2311_check.probe.plcy.info.html'
            })
            .when('/priodic/plcy', {
                templateUrl: 'views/contents/052_S_2312_check.rule.plcy.list.html'
            })
            .when('/demand', {
                templateUrl: 'views/contents/052_S_2320_check.demand.html'
            })
            .when('/demand/process', {
                templateUrl: 'views/contents/052_S_2321_check.demand.process.html'
            })
            .when('/demand/result', {
                templateUrl: 'views/contents/052_S_2322_check.demand.result.html'
            })
            .when('/current', {
                templateUrl: 'views/contents/052_S_2400_check.current.list.html'
            })
            .when('/current/plcy', {
                templateUrl: 'views/contents/052_S_2410_check.current.plcy.info.html'
            })
            .when('/priodicR', {
                templateUrl: 'views/contents/052_S_2520_result.priodic.html'
            })
            .when('/priodicavg', {
                templateUrl: 'views/contents/052_S_2530_result.priodic.avg.list.html'
            })
            //종료:김선규




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

        //$locationProvider.html5Mode(true);
    });