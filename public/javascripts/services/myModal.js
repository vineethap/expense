
app.factory('myModal',function(mdl){
	return mdl({
		controller : 'MyModalCtrl',
		controllerAs : 'modal',
		templateUrl: 'my-modal.html'
	});
}).
controller('MyModalCtrl', function (myModal) {
  this.closeMe = myModal.deactivate;
}).

controller('MyCtrl', function (myModal) {
  this.showModal = myModal.activate;
});