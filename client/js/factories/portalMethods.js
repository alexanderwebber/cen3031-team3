angular.module('portal', []).factory('Portal', function($http) {
  var methods = {
	  return login: function(){
		  //determine if admin or parent
		  return $http.get('https://dancingwithdawn.herokuapp.com/', login_id, admin);
	  }
  };

  return methods;
});
