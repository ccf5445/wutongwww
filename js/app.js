// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

////李重阳
//var mainServer = "http://192.168.3.136:8080/share/";

//谢词栋
var mainServer = "http://192.168.3.101:8080/share/";

define([],function(){
    return angular.module('starter', ['ionic'])

        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .directive('hideTabs', function($rootScope) {
            return {
                restrict: 'A',
                link: function($scope, $el) {
                    $rootScope.hideTabs = true;
                    $scope.$on('$destroy', function() {
                        $rootScope.hideTabs = false;
                    });
                }
            };
        })
});

