/**
 * Created by BLKNABI on 2014-08-14.
 */
'use strict';

angular.module('gntelCqmsApp')
    .factory('dbUserOrg', function ($http, $q) {
        var dbUserOrg = {};

        // 리스트
        dbUserOrg.getList = function () {
            var deferred = $q.defer();

            $http({
                    method: 'post',
                    url: '/dbUserOrg/getList'
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );

            return deferred.promise;
        };

        // 하나
        dbUserOrg.getOne = function (_id) {
            var deferred = $q.defer();

            $http({
                    method: 'post',
                    url: '/dbUserOrg/getOne',
                    data: {id: _id}
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );

            return deferred.promise;
        };

        // 삽입
        dbUserOrg.insert = function (obj) {
            var deferred = $q.defer();

            $http({
                    method: 'post',
                    url: '/dbUserOrg/insert',
                    data: obj
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );

            return deferred.promise;
        };

        // 수정
        dbUserOrg.update = function (obj) {
            var deferred = $q.defer();

            $http({
                    method: 'post',
                    url: '/dbUserOrg/update',
                    data: obj
                }
            ).success(function (data) {
                    deferred.resolve(data.sending);
                }
            );

            return deferred.promise;
        };

        return dbUserOrg;
    });
