//lmao
app.controller('LoginCtrl', function($scope, $firebaseArray, $state, $window, todoService){
	$scope.save = function(){
		$scope.newTodo = todoService.all;
		$scope.newTodo.$add({
			user: $scope.user
		});
		$scope.newTodo.$add({
			pass: $scope.pass
		});
		$state.go('login');
		
		$window.location.href = "#/cadastro";
	}
});

app.controller('CadastroCtrl', function($scope, $firebaseArray, $state, $window, todoService){
	
})