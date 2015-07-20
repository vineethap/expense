app.factory('expense',['$http',function($http){
	return {
		get : function(){
			return	$http.get('/api/Products/find');
		},

		save : function(data){
			return $http.post('api/Products/insert',data);
		},
		update :function(data){
			console.log(data);
			return $http.put('/api/Products/'+data._id,data);
		}
   //       
	}

}]);
