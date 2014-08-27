/**
 * Created by BLKNABI on 2014-08-14.
 */
'use strict';

angular.module('gntelCqmsApp')
    .controller('userOrgCtrl', function ($scope) {

        $scope.selectedItem = null;

    })
    .controller('userOrgListCtrl', function ($scope, dbUserOrg) {

        $scope.search = {'useyn':'Y'};

        $scope.itemsPerPage = 10;
        $scope.pagedItems = [];
        $scope.currentPage = 0;
        $scope.filterItems = [];

        $scope.process = function (selected) {
            $scope.$emit("org:selected", selected);
        };

        var getlist = function () {
            dbUserOrg.getList()
                .then(function (result) {
                    $scope.items = result;
                })
                .then(function () {

                    $scope.getPageMax = function() {
                        var pageMax = 0;
                        var div = Math.floor($scope.filterItems.length / $scope.itemsPerPage);

                        if($scope.filterItems.length % $scope.itemsPerPage == 0) {
                            pageMax = div;
                        }
                        else {
                            pageMax = div + 1;
                        }
                        return pageMax;
                    };

                    $scope.range = function (start, end) {
                        var ret = [];

                        if(start < 0) {
                            start = 0;
                            end = start + 5;
                        }

                        if(end > $scope.getPageMax()) {
                            end = $scope.getPageMax();
                            start = end - 5;
                            if(start < 0)
                                start = 0;
                        }

                        if (!end) {
                            end = start;
                            start = 0;
                        }
                        for (var i = start; i < end; i++) {
                            ret.push(i);
                            console.log(i);
                        }
                        return ret;
                    };

                    $scope.prev10Page = function() {
                        if ($scope.currentPage >= 10) {
                            $scope.currentPage -= 10;
                        }
                        else if($scope.currentPage < 10) {
                            $scope.currentPage = 0;
                        }
                    };

                    $scope.prevPage = function () {
                        if ($scope.currentPage > 0) {
                            $scope.currentPage--;
                        }
                    };

                    $scope.nextPage = function () {
                        if ($scope.currentPage < $scope.getPageMax() - 1) {
                            $scope.currentPage++;
                        }
                    };

                    $scope.next10Page = function() {
                        if ($scope.currentPage < $scope.getPageMax() - 10) {
                            $scope.currentPage += 10;
                        }
                        else if($scope.currentPage < $scope.getPageMax() - 1) {
                            $scope.currentPage = $scope.getPageMax() - 1;
                        }
                    };

                    $scope.setPage = function () {
                        $scope.currentPage = this.n;
                    };
                });
        };
        getlist();
    });
