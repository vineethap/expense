// app.controller('ModalCtrl','insert',function($modal,$log,$scope,insert){


// 	$scope.open = function(){
// 		$scope.items; 
//     	$scope.idSelected ="";
//     	$scope.details= {
// 		Date_of_purchase: '',
// 		Prdt_name: '',
// 		Price: ''
// 		};
// 		$scope.err = "";	   
		
//     	insert.getDetails()
//     		.success(function(data){

//     			$scope.items = data;
    			
//     		}).
//             error(function(error) {
//                 console.log(error.message);
//             });
//              $scope.getId = function (items)
//          {
//          	 $scope.idSelected = items._id;
//                	insert.getId({id :items._id})
//          		.success(function(data){
//          			$scope.details.id = data._id;
//          			$scope.details.Date_of_purchase = data.Date_of_purchase;
//          			$scope.details.Prdt_name = data.Prdt_name;
//          			$scope.details.Price= Price;

         			
//          		}).
//          		error(function(error){
//          			console.log(error.message);
//          		})
//          }
		
// 		var modalInstance = $modal.open({
// 			templateUrl: 'myModal.html',
// 			controller: 'ModalInstance',
// 			size: 'lg'
// 			// resolve :function(){
// 			// 	 return $scope.arr;
// 			// }
// 		});

// 		modalInstance.result.then(function(){
// 			$log.info('Modal dismissed at: ' + new Date());
// 		});
// 	};

// });

// app.controller('ModalInstance',['$scope','expense','$modalInstance',function($scope,expense,$modalInstance){
    
//     $scope.ok = function(){
//         //save
     
//         expense.save($scope.arr);
        
//         $modalInstance.close();
//     };
//     $scope.cancel = function () {
//         $modalInstance.dismiss('cancel');
//     };  
// }]);