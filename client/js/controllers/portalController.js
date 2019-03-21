angular.module('portal_collections').controller('PortalController', ['$scope', 'Portal',
    function($scope, Portal) {
        var admin_features = Portal.admin_features;
        var logins = Portal.logins;


        $scope.webtext = function () {
            Portal.admin_features().then(function(response) {
                var webtext_json = response.data;

                $scope.homepage = {
                    summary: webtext_json.filter(a => a.type == "home_summary")[0].message
                }
            }, function(error) {
                console.log('Unable to retrieve listings:', error);
            });

        };

        $scope.login = function(username, password) {
            UserSvc.login(username, password).then(function (user) { 
                console.log(user)
            })
        };

        $scope.newUser = function() {};
    }
]);


