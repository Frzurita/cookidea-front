angular.module('inspinia')
    .run(function($FB){
        $FB.init('785612768227305');
    });

angular.module('inspinia').controller('temp',function($scope,$timeout){

    $timeout(function(){
        $scope.url = 'http://takatick.com/';
        $scope.text = 'Takatick, mercado colaborativo de entradas.';
        $scope.title = 'Takatick'
    },1000);
    $timeout(function(){
        $scope.url = 'http://takatick.com/';
        $scope.text = 'Takatick, mercado colaborativo de entradas.';
        $scope.title = 'Takatick';
    },10000)
});
