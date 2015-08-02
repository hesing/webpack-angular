module.exports = function(ngModule){
	ngModule.controller('AppCtrl', function(User){
		var vm = this;

		vm.users = User;
	});
};
	