/**
 * Created by ccf on 16/4/21.
 */

define(['app'], function(app){
    return app.factory('userInfoService', function($rootScope){

        var service = {};
        service.userInfo = [];

        service.refreshUserInfo = function(user){

            //缓存用户ID
            localStorage.userId = user.result.id;
            //缓存用户账户
            localStorage.account = user.result.account;
            //缓存用户昵称
            localStorage.nickname = user.result.nickname;
            //缓存用户个性签名
            localStorage.motto = user.result.sign;
            //缓存用户头像
            localStorage.avatar = user.result.head_img;
            //等我回答的数量
            localStorage.waitForAnswerNum = user.myWaitAnsCount;
            //我的问题的数量
            localStorage.myQuesNum = user.myQuesCount;
            //我的粉丝数
            localStorage.myFollowerNum = user.myFunsCount;
            //我的答案数
            localStorage.myAnswerNum = user.myAnsCount;
            //我的收藏数
            localStorage.markedNum = user.myCollectCount;

            //用户信息
            this.userInfo = [{
                account: user.result.account,
                nickname: user.result.nickname,
                avatar: user.result.head_img,
                motto: user.result.sign,
                userSign: user.result.sign,
                markedNum: user.myCollectCount,
                myAnswerNum: user.myAnsCount,
                waitForAnswerNum: user.myWaitAnsCount,
                myFollowerNum: user.myFunsCount,
                myQuesNum: user.myQuesCount
            }];

            $rootScope.$broadcast("userRefreshed");
        };
        return service;

    });
})