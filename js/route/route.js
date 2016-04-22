/**
 * Created by chen
 */

define(['app','angularAMD'], function(app,angularAMD){
        app.config(function($ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom');
        })
        .config(function($stateProvider, $urlRouterProvider) {

            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                // setup an abstract state for the tabs directive

                .state('tab',{
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html',
                    controllerUrl: 'js/controllers/homeCtrl.js'

                })

                // Each tab has its own nav history stack:

// * * * * * * * * * * * * * * * * * * * * * * 一级菜单下的路由 * * * * * * * * * * * * * * * * * * * * * *
                .state('tab.circle', angularAMD.route({
                    url: '/circle',
                    views: {
                        'tab-circle': {
                            templateUrl: 'templates/tab-circle.html',
                            controllerUrl: 'js/controllers/circleCtrl.js',
                            abstract: true
                        }
                    }
                }))

                .state('tab.post', {
                    url: '/post',
                    views: {
                        'tab-post': angularAMD.route({
                            templateUrl: 'templates/tab-post.html',
                            controllerUrl: 'js/controllers/postCtrl.js'
                        })
                    }
                })


                .state('tab.concrete', {
                    url: '/concrete',
                    views: {
                        'tab-concrete': angularAMD.route({
                            templateUrl: 'templates/tab-concrete.html',
                            controllerUrl: 'js/controllers/concreteCtrl.js'

                        })
                    }
                })

                .state('tab.homepage', {
                    url: '/homepage',
                    views: {
                        'tab-homepage': angularAMD.route({
                            templateUrl: 'templates/tab-homepage.html',
                            controllerUrl: 'js/controllers/homepageCtrl.js'
                        })
                    }
                })

// * * * * * * * * * * * * * * * * * * * * * * 一级菜单下的路由 * * * * * * * * * * * * * * * * * * * * * *




// * * * * * * * * * * * * * * * * * * * * * * 二级菜单 circle 下的路由 * * * * * * * * * * * * * * * * * *
                .state('tab.circle.commend',{
                    url: "/commend",
                    views: {
                        'circle-commend': angularAMD.route({
                            templateUrl: "templates/circle/circle-commend.html",
                            controllerUrl: 'js/controllers/circle/circleCommendCtrl.js'

                        })
                    }

                })

                .state('tab.circle.campaign', {
                    url: "/campaign",
                    views: {
                        'circle-campaign': angularAMD.route({
                            templateUrl: "templates/circle/circle-campaign.html",
                            controllerUrl: 'js/controllers/circle/circleCampaignCtrl.js'

                        })
                    }
                })


                .state('tab.circle.new', {
                    url: "/new",
                    views: {
                        'circle-new': angularAMD.route({
                            templateUrl: "templates/circle/circle-new.html",
                            controllerUrl: 'js/controllers/circle/circleNewCtrl.js'

                        })
                    }
                })


                .state('tab.circle.regard', {
                    url: "/regard",
                    views: {
                        'circle-regard': angularAMD.route({
                            templateUrl: "templates/circle/circle-regard.html",
                            controllerUrl: 'js/controllers/circleRegardCtrl.js'

                        })
                    }
                })
// * * * * * * * * * * * * * * * * * * * * * * 二级菜单 circle 下的路由 * * * * * * * * * * * * * * * * * *




            //.state('section-question', {
            //  url: '/section-question',
            //  view: {
            //    'section-question': {
            //      abstract: true,
            //      templateUrl: 'templates/section-question.html',
            //      controller: 'sectionQuestionCtrl'
            //    }
            //  }
            //})
            //
            //.state('result-question', {
            //  url:''
            //})
            //
            //.state('result-user', {
            //
            //});

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/circle');

        });

});