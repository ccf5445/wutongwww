/**
 * Created by luozixiao on 4/21/16.
 */
define(['app'],function(app){
    console.log(1)
    return ['$scope','$rootScope','$ionicHistory','$state','$ionicModal'
        ,'$ionicScrollDelegate','$ionicPopup','$ionicLoading'
        , function(
        $scope, $rootScope, $ionicHistory, $state, $ionicModal,
        $ionicScrollDelegate, $ionicPopup, $ionicLoading){

        //判断是否已经登录
        $scope.getDataForHome = function(){
            if(localStorage.length == 0){
                $scope.openLoginModal();
            }
            console.log(localStorage);
        };



        //弹出提示框
        $scope.showAlert = function(title, template){
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: template
            });
        };

        //加载时候的蒙版层
        $scope.loadingShow = function() {
            $ionicLoading.show({
                template: '<ion-spinner icon="crescent"></ion-spinner>'
            });
        };
        $scope.loadingHide = function(){
            $ionicLoading.hide();
        };


        //* * * * * * * * * 问题详情
        $ionicModal.fromTemplateUrl('templates/section-question.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionQuestionModal = modal;
        });

        $scope.openQuestionModal = function(id) {
            $scope.questionId = id;
            $scope.sectionQuestionModal.show();
        };

        $scope.closeQuestionModal = function() {
            $scope.sectionQuestionModal.hide();
        };

        //* * * * * * * * * 答案详情
        $ionicModal.fromTemplateUrl('templates/section-answer-detail.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionAnswerModal = modal;
        });

        $scope.openAnswerDetailModal = function(id, question) {
            $scope.answerId = id;
            $scope.questionTitle = question;
            $scope.sectionAnswerModal.show();
        };

        $scope.closeAnswerDetailModal = function() {
            $scope.sectionAnswerModal.hide();
        };

        //* * * * * * * * * 添加问题标题
        $ionicModal.fromTemplateUrl('templates/section-quiz.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionQuizModal = modal;
        });

        $scope.openQuizModal = function() {
            $scope.sectionQuizModal.show();
            //var editor = UM.getEditor('myEditor',{
            //    toolbar:['image'],
            //    //focus时自动清空初始化时的内容
            //    autoClearinitialContent:true,
            //    //关闭字数统计
            //    wordCount:false,
            //    //关闭elementPath
            //    elementPathEnabled:false,
            //    //默认的编辑区域高度
            //    initialFrameHeight:300,
            //    //是否允许自动变高
            //    autoHeightEnabled:false
            //    //更多其他参数，请参考umeditor.config.js中的配置项
            //});
        };

        $scope.closeQuizModal = function() {
            $scope.sectionQuizModal.hide();
        };

        //* * * * * * * * * 添加问题描述
        $ionicModal.fromTemplateUrl('templates/section-quiz-detail.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionQuizDetailhModal = modal;
        });

        $scope.openQuizDetailModal = function() {
            $scope.sectionQuizDetailhModal.show();
        };

        $scope.closeQuizDetailModal = function() {
            $scope.sectionQuizDetailhModal.hide();
        };

        //* * * * * * * * * 搜索
        $ionicModal.fromTemplateUrl('templates/section-search.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionSearchModal = modal;
        });

        $scope.openSearchModal = function() {
            $scope.sectionSearchModal.show();
        };

        $scope.closeSearchModal = function() {
            $scope.sectionSearchModal.hide();
        };

        //* * * * * * * * * 登录
        $ionicModal.fromTemplateUrl('templates/section-login.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionLogin = modal;
        });
        $scope.openLoginModal = function() {
            $scope.sectionLogin.show();
        };

        $scope.closeLoginModal = function() {
            $scope.sectionLogin.hide();
        };

        //* * * * * * * * * 注册
        $ionicModal.fromTemplateUrl('templates/section-sign.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionSign = modal;
        });
        $scope.openSignModal = function() {
            $scope.sectionSign.show();
            $scope.buttonText_sign = '发送验证码'
        };

        $scope.closeSignModal = function() {
            $scope.sectionSign.hide();
        };

        //* * * * * * * * *重置密码
        //输入账号
        $ionicModal.fromTemplateUrl('templates/section-fetchPsw-1.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionfetchPsw_1 = modal;
        });
        $scope.openFetchPsw_1Modal = function() {
            $scope.sectionfetchPsw_1.show();
        };

        $scope.closeFetchPsw_1Modal = function() {
            $scope.sectionfetchPsw_1.hide();
        };

        //输入验证码
        $ionicModal.fromTemplateUrl('templates/section-fetchPsw-2.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionfetchPsw_2 = modal;
        });
        $scope.openFetchPsw_2Modal = function() {
            $scope.sectionfetchPsw_2.show();
            $scope.buttonText_fetch = "发送验证码";
        };

        $scope.closeFetchPsw_2Modal = function() {
            $scope.sectionfetchPsw_2.hide();
        };

        //输入重置密码
        $ionicModal.fromTemplateUrl('templates/section-fetchPsw-3.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionfetchPsw_3 = modal;
        });
        $scope.openFetchPsw_3Modal = function() {
            $scope.sectionfetchPsw_3.show();
        };

        $scope.closeFetchPsw_3Modal = function() {
            $scope.sectionfetchPsw_3.hide();
        };


        //* * * * * * * * * 个人主页 —— 梧桐圈协议
        $ionicModal.fromTemplateUrl('templates/section-homepage-agreement.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionAgreement = modal;
        });
        $scope.openAgreementModal = function() {
            $scope.sectionAgreement.show();
        };

        $scope.closeAgreementModal = function() {
            $scope.sectionAgreement.hide();
        };

        //* * * * * * * * * 个人主页 —— 等我回答
        $ionicModal.fromTemplateUrl('templates/section-homepage-answer.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionAnswer = modal;
        });
        $scope.openAnswerModal = function() {
            $scope.sectionAnswer.show();
        };

        $scope.closeAnswerModal = function() {
            $scope.sectionAnswer.hide();
        };

        //* * * * * * * * * 个人主页 —— 问题反馈
        $ionicModal.fromTemplateUrl('templates/section-homepage-feedback.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionFeedback = modal;
        });
        $scope.openFeedbackModal = function() {
            $scope.sectionFeedback.show();
        };

        $scope.closeFeedbackModal = function() {
            $scope.sectionFeedback.hide();
        };

        //* * * * * * * * * 个人主页 —— 我的粉丝
        $ionicModal.fromTemplateUrl('templates/section-homepage-followers.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionFollower = modal;
        });
        $scope.openFollowerModal = function() {
            $scope.sectionFollower.show();
        };

        $scope.closeFollowerModal = function() {
            $scope.sectionFollower.hide();
        };

        //* * * * * * * * * 个人主页 —— 我的收藏
        $ionicModal.fromTemplateUrl('templates/section-homepage-marked.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionMark = modal;
        });
        $scope.openMarkModal = function() {
            $scope.sectionMark.show();
        };

        $scope.closeMarkModal = function() {
            $scope.sectionMark.hide();
        };

        //* * * * * * * * * 个人主页 —— 我的提问
        $ionicModal.fromTemplateUrl('templates/section-homepage-question.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionQuestion = modal;
        });
        $scope.openMyQuestionModal = function() {
            $scope.sectionQuestion.show();
        };

        $scope.closeMyQuestionModal = function() {
            $scope.sectionQuestion.hide();
        };

        //* * * * * * * * * 个人主页 —— 设置
        $ionicModal.fromTemplateUrl('templates/section-homepage-setting.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionSetting = modal;
        });
        $scope.openSettingModal = function() {
            $scope.sectionSetting.show();
        };

        $scope.closeSettingModal = function() {
            $scope.sectionSetting.hide();
        };

        //* * * * * * * * * 个人主页 —— 我的关注
        $ionicModal.fromTemplateUrl('templates/section-homepage-watch.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionWatch = modal;
        });
        $scope.openWatchModal = function() {
            $scope.sectionWatch.show();
        };

        $scope.closeWatchModal = function() {
            $scope.sectionWatch.hide();
        };

        //* * * * * * * * * 个人主页 —— 我的回答
        $ionicModal.fromTemplateUrl('templates/section-homepage-myAnswer.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionMyAnswer = modal;
        });
        $scope.openMyAnswerModal = function() {
            $scope.sectionMyAnswer.show();
        };

        $scope.closeMyAnswerModal = function() {
            $scope.sectionMyAnswer.hide();
        };

        //* * * * * * * * * 个人主页 —— 编辑我的资料
        $ionicModal.fromTemplateUrl('templates/section-homepage-EditInfo.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.sectionEditInfo = modal;
        });
        $scope.openEditInfoModal = function() {
            $scope.sectionEditInfo.show();
        };

        $scope.closeEditInfoModal = function() {
            $scope.sectionEditInfo.hide();
        };

    }]
});