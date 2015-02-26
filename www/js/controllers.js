myApp.controller('TermsTabCtrl', function($ionicHistory){

});

myApp.controller('AboutCtrl', function($ionicHistory){

});

myApp.controller('HomeTabCtrl', function($scope,$ionicHistory,$ionicScrollDelegate) {
    
    $scope.arrow = "down";
    $scope.arrow2 = "down";
    
    $scope.showSteps1 = false;
    $scope.showSteps2 = false;

    $scope.jobClick1 = function (){
        
        if($scope.arrow == "down")
        {
            $scope.arrow = "up";
        }
        else
        {
            $scope.arrow = "down";
        }
        
        $ionicScrollDelegate.resize();
        
    }
    
    $scope.jobClick2 = function (){
        
     if($scope.arrow2 == "down")
        {
            $scope.arrow2 = "up";
        }
        else
        {
            $scope.arrow2 = "down";
        }
        
         $ionicScrollDelegate.resize();
    }      
});