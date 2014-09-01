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

            // 추가:김민정
            .when('/loginadd', {
                // 이용자추가
                redirectTo: 'views/contents/052_S_1100_user.add.html'
            })
            // 추가:김민정

            // 추가:심정미

            .when('/quality/weather_chart', {
                //품질기상도
                redirectTo: '/quality/weather_chart/base'
            })

            .when('/quality/weather_chart/base', {
                //품질기상도
                templateUrl: 'views/contents/052_S_2100_quality.weather.chart.html'
            })
    /*       .when('/quality/weather_chart/red', {
                //품질기상도
                templateUrl: 'views/contents/052_S_2100_quality.weather.chart_red.html'
            })
            .when('/quality/weather_chart/blue', {
                //품질기상도
                templateUrl: 'views/contents/052_S_2100_quality.weather.chart_blue.html'
            })
            // 추가:심정미
*/

            //추가:채영범
            .when('/probe/list', {
                // probe 등록현황
                templateUrl: '../views/contents/052_S_2210_probe.list.html'
            })
            .when('/probe/setting', {
                templateUrl: '../views/contents/052_S_2211_probe.setting.default.html'
            })
            .when('/probe/info', {
                templateUrl: '../views/contents/052_S_2212_probe.info.html'
            })
            .when('/poly/list', {
                // probe 품질정책현황
                templateUrl: '../views/contents/052_S_2220_probe.plcy.list.html'
            })
            .when('/poly/info', {
                templateUrl: '../views/contents/052_S_2222_probe.plcy.info.html'
            })
            .when('/poly/setting', {
                templateUrl: '../views/contents/052_S_2221_probe.plcy.setting.default.html'
            })
            .when('/probe/search', {
                templateUrl: '../views/contents/052_S_2301_quality.check.search.probe.html'
            })
            //종료:채영범

            //추가:김선규
            .when('/priodic', {
                //주기적측정
                templateUrl: 'views/contents/052_S_2310_check.priodic.html'
            })
            .when('/priodic/result', {
                //주기적측정-결과
                templateUrl: 'views/contents/052_S_2311_check.probe.plcy.info.html'
            })
            .when('/priodic/plcy', {
                //주기적측정 - 정책목록
                templateUrl: 'views/contents/052_S_2312_check.rule.plcy.list.html'
            })
            .when('/demand', {
                //on-demand 측정
                templateUrl: 'views/contents/052_S_2320_check.demand.html'
            })
            .when('/demand/process', {
                //on-demand 측정-진행
                templateUrl: 'views/contents/052_S_2321_check.demand.process.html'
            })
            .when('/demand/result', {
                //on-demand 측정-결과
                templateUrl: 'views/contents/052_S_2322_check.demand.result.html'
            })
            .when('/current', {
                //측정 현황
                templateUrl: 'views/contents/052_S_2400_check.current.list.html'
            })
            .when('/current/plcy', {
                //측정 현황-정책
                templateUrl: 'views/contents/052_S_2410_check.current.plcy.info.html'
            })
            .when('/priodicR', {
                //주기적측정결과
                templateUrl: 'views/contents/052_S_2520_result.priodic.html'
            })
            .when('/priodicavg', {
                //주기적측정결과평균
                templateUrl: 'views/contents/052_S_2530_result.priodic.avg.list.html'
            })
            //종료:김선규


            // 추가 : 심정미
            .when('/quality/result/demand', {
                // on-demand 측정 결과
                templateUrl: 'views/contents/052_S_2510_quality.result.demand.html'
            })
            .when('/log/probe', {
                // probe 이력
                templateUrl: 'views/contents/052_S_2600_log_probe.html'
            })
            .when('/log/plcy', {
                // 품질정책이력
                templateUrl: 'views/contents/052_S_2610_log_quality_plcy.html'
            })
            // 종료 : 심정미

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