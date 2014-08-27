'use strict';

angular.module('gntelCqmsApp')
    .controller('MainCtrl', function ($scope, $http, $route, $rootScope, $location) {

        var init = function() {
            var layout = false;

            console.log($location.url());

            switch($location.url()) {
                case '':
                    layout = false;
                    break;
                case '/':
                    layout = false;
                    break;
                case '/#/':
                    layout = false;
                    break;
                default:
                    layout = true;
                    break;
            }
            $rootScope.layout = layout;
            $route.reload();
        };
        init();

        $scope.tryLogin = function() {
            $scope.login();
        };

        $scope.login = function() {
            $rootScope.layout = true;
            $location.url('/login');
        };

        $scope.home = function() {
            $location.url('/home');
        };

        $scope.logout = function() {
            $rootScope.layout = false;
            $location.url('/');
        };
    });
