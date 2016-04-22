/**
 * Created by luozixiao on 4/21/16.
 */

define([],function(){
    return [
        '$scope','$http','$ionicLoading', function($scope, $http,$ionicLoading){
            console.log('圈子-动态控制器');
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

                $scope.unSign = false;
                $scope.noData = false;
                $scope.unWatch = false;

                if (localStorage.length == 0){
                    console.log("还没有登录");
                    $scope.dataArray = [];
                    $scope.unSign = true;
                    $scope.loadingHide();
                    $scope.$broadcast('scroll.refreshComplete');
                }else {
                    var url = mainServer + "latest/trend?userId=" + localStorage.userId;
                    $http.post(url).success(function(data){
                        $scope.loadingHide();
                        if(tag == 'refresh'){
                            $scope.$broadcast('scroll.refreshComplete');
                        }
                        switch (data.resultCode) {
                            case '1000': {
                                $scope.dataArray = data.trends;
                                console.log($scope.dataArray);
                                break;
                            }
                            case '1001': {
                                $scope.dataArray = [];
                                console.log('关注的用户暂无内容');
                                $scope.noData = true;
                                break;
                            }
                            case '1002': {
                                $scope.dataArray = [];
                                console.log('当前用户暂未关注其他用户');
                                $scope.unWatch = true;
                                break;
                            }
                            default: {
                                $scope.dataArray = [];
                                console.log("无数据");
                                $scope.noData = true;
                                break;
                            }
                        }
                    }).error(function(error){
                        $scope.loadingHide();
                        console.log(error);
                        $scope.dataArray = [];
                        $scope.noData = true;
                        $scope.$broadcast('scroll.refreshComplete');
                    })
                }
            };

            fetchData();

            $scope.doRefresh = function(){
                fetchData('refresh');
            }
        }]
})