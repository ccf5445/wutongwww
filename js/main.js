/**
 * Created by ccf on 16/4/21.
 */

require.config({
    paths: {
        'route':"route/route",
        'angularAMD':'route/angularAMD',
        'app':'app',
        'home':'controllers/homeCtrl',
        'userInfoService':'services/userInfoService'
    }

});
require(['app','route','userInfoService'],function(){
    angular.bootstrap(document,["starter"]);
});