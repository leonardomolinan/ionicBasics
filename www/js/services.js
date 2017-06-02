app.factory('todoService', function($firebaseArray){
	//var ref = new Firebase('https://secondproject-adf0c.firebaseio.com/');

	var config = {
    apiKey: "AIzaSyDZPmONE_Ga5d8jtZFInawwiJp3QzLsroM",
    authDomain: "secondproject-adf0c.firebaseapp.com",
    databaseURL: "https://secondproject-adf0c.firebaseio.com",
    projectId: "secondproject-adf0c",
    storageBucket: "secondproject-adf0c.appspot.com",
    messagingSenderId: "921437667453"
  	};
  	
  	firebase.initializeApp(config);


  	var self = this;
	var usersRef = firebase.database().ref("users");
    usersRef.on('value', function(snapshot) {
    	self.users = snapshot.val();
    });

	var todos = $firebaseArray(usersRef);
	var todoService = {
		all: todos,
		get: function(todoId){
			return todos.$getRecord(todosId);
		}
	}

	return todoService;
});