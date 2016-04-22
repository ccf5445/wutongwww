/**
 * Created by luozixiao on 4/21/16.
 */

define([],function(){
    return ['$scope','$http','$ionicLoading', function($scope, $http,$ionicLoading){
        console.log('圈子-关注控制器');


        //加载时候的蒙版层
        $scope.loadingShow = function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="crescent"></ion-spinner>'
            });
        };
        $scope.loadingHide = function(){
            $ionicLoading.hide();
        };
        var fetchData = function(tag){
            $scope.loadingShow();
            $scope.noData = false;
            var url = mainServer + "latest/latestList";
            $http.post(url).success(function(data){
                $scope.loadingHide();
                if(tag == 'refresh'){
                    $scope.$broadcast('scroll.refreshComplete');
                }
                switch (data.resultCode) {
                    case '1000': {
                        $scope.dataArray = data.result;
                        console.log($scope.dataArray);
                        break;
                    }
                    case '1001': {
                        $scope.dataArray = [];
                        console.log("没有数据");
                        $scope.noData = true;
                        break;
                    }
                    default: {
                        $scope.dataArray = [];
                        console.log("没有数据");
                        $scope.noData = true;
                        break;
                    }
                }
            }).error(function(error){
                $scope.loadingHide();
                $scope.dataArray = [];
                console.log(error);
                $scope.noData = true;
                $scope.$broadcast('scroll.refreshComplete');
            })
        };

        fetchData();

        $scope.doRefresh = function(){
            fetchData("refresh");
        }
    }]
})