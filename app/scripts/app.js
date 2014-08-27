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
                templateUrl: 'views/contents/052_S_quality_check_priodic.html'
            })
            .when('/priodic/result', {
                templateUrl: 'views/contents/052_S_quality_check_probe_plcy_info.html'
            })
            .when('/priodic/plcy', {
                templateUrl: 'views/contents/052_S_quality_check_rule_plcy_list.html'
            })
            .when('/demand', {
                templateUrl: 'views/contents/052_S_quality_check_demand.html'
            })
            .when('/demand/process', {
                templateUrl: 'views/contents/052_S_quality_check_demand_process.html'
            })
            .when('/demand/result', {
                templateUrl: 'views/contents/052_S_quality_check_demand_result.html'
            })
            .when('/current', {
                templateUrl: 'views/contents/052_S_quality_check_current_list.html'
            })
            .when('/current/plcy', {
                templateUrl: 'views/contents/052_S_quality_check_current_plcy_info.html'
            })
            .when('/priodicR', {
                templateUrl: 'views/contents/052_S_quality_result_priodic.html'
            })
            .when('/priodicavg', {
                templateUrl: 'views/contents/052_S_quality_result_priodic_avg_list.html'
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