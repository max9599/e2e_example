var app = angular.module('testApp', []);

app.controller('BodyController', function ($scope) {
    $scope.data = ["testData1", "testData2"];
    $scope.showButtonClicked = false;
    $scope.show = function () {
        $scope.showButtonClicked = !$scope.showButtonClicked;
    }
});