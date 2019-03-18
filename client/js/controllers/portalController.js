var app = angular.module('portal', []);
app.controller('PortalController', function($scope) {



    $scope.loginUser = function() {
        $scope.loginInfo = {
            email: "test@email.com",
            password: "password123"
        };
    }

    $scope.newUser = function() {
        $scope.loginInfo = {
            email: "test@email.com",
            password: "password123"
        };
    }

    $scope.homePage = function(){
        $scope.text = {
            summary: ""
        }
    }
});