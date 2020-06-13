(function () {
    'use strict';
    angular.module('signup').factory('signupInterceptor', SignUpInterceptor);

    SignUpInterceptor.$inject = ["$rootScope", "$q"];
    function SignUpInterceptor($rootScope, $q) {
        var evtName = "signup:noSuchMenuItem";

        return {
            response: function (response) {
                $rootScope.$broadcast(evtName, { on: false });
                return response;
            },

            responseError: function (response) {
                $rootScope.$broadcast(evtName, { on: true });
                return $q.reject(response);
            }
        };
    }
})();