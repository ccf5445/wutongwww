/**
 * Created by luozixiao on 4/21/16.
 */
define([],function(){
    return ['$scope','userInfoService', function($scope, userInfoService) {

        console.log('个人主页控制器');

            //登录成功之后返回赋值
            $scope.$on('userRefreshed',function(){
                $scope.userInfo = [{
                    account: userInfoService.userInfo[0].account,
                    nickname: userInfoService.userInfo[0].nickname,
                    avatar: userInfoService.userInfo[0].avatar,
                    motto: userInfoService.userInfo[0].motto,
                    markedNum: userInfoService.userInfo[0].markedNum,
                    myAnswerNum: userInfoService.userInfo[0].myAnswerNum,
                    waitForAnswerNum: userInfoService.userInfo[0].waitForAnswerNum,
                    myFollowerNum: userInfoService.userInfo[0].myFollowerNum,
                    myQuesNum: userInfoService.userInfo[0].myQuesNum
                }];
                console.log($scope.userInfo);
            });

            //根据缓存赋值
            if(!localStorage.length == 0) {
                $scope.userInfo = [{
                    account: localStorage.account,
                    nickname: localStorage.nickname,
                    avatar: localStorage.avatar,
                    motto: localStorage.motto,
                    markedNum: localStorage.markedNum,
                    myAnswerNum: localStorage.myAnswerNum,
                    waitForAnswerNum: localStorage.waitForAnswerNum,
                    myFollowerNum: localStorage.myFollowerNum,
                    myQuesNum: localStorage.myQuesNum
                }];
                console.log($scope.userInfo);
            };

            //是否有新的未查看回答邀请
            $scope.newAnswerRequest = function(){
                if ($scope.userInfo[0].waitForAnswerNum == 0) {
                    return false;
                }else {
                    return true;
                }
            };

            //刷新个人主页信息
            $scope.doRefresh = function(){

            };
        }]
})