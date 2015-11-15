/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/home");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: "views/today.html",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/chosen.css','js/plugins/chosen/chosen.jquery.js','js/plugins/chosen/chosen.js']
                        }
                    ]);
                }
            }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login.html"
        })
        .state('result', {
            url: "/result",
            templateUrl: "views/list.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/register.html"
        })
        .state('generic', {
            url: "/post/:postId",
            templateUrl: "views/generic.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/contact.html"
        })
}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
