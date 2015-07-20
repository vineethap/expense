app.controller('MainController', ['$scope', 'expense', '$modal', function($scope, expense, $modal, $log) {

    expense.get().success(function(data) {
        $scope.details = data;
        $scope.total = 0;
        for (var detail in $scope.details) {
            console.log($scope.details[detail].Price)
            $scope.total += $scope.details[detail].Price;
        }

    });

    $scope.open = function() {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            resolve:{
            	item:false
            },
            size: 'md'
        });
    };

    $scope.edit = function($index) {
        console.log("hehe i got it", $index)
        var modalInstance = $modal.open({
            templateUrl: 'myModal.html',
            controller: 'ModalInstanceCtrl',
            size: 'lg',
            resolve: {
                item: function() {
                    console.log($scope.details[$index])
                    return $scope.details[$index];
                }
            }

        });

        // modalInstance.result.then(function(){
        // 	$log.info('Modal dismissed at: ' + new Date());
        // });

    }

}]);


app.controller('ModalInstanceCtrl', ['$scope', 'expense', '$modalInstance', 'item', function($scope, expense, $modalInstance, item) {

    if(item) {
    	$scope.item = item;
    	$scope.save = function() {
    	    console.log($scope.item)
    	    expense.update($scope.item);
    	    $modalInstance.close();
    	}
    }
    $scope.ok = function() {
        //save

        expense.save($scope.arr);

        $modalInstance.close();
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}]);
