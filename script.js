var app=angular.module("demo",["ngRoute"])
app.config(function($routeProvider){
	$routeProvider
	  .when("/home",{
	  	templateUrl:"home.html",
	  	controller:"homeController"
	  })
	  .when("/course",{
	  	templateUrl:"course.html",
	  	controller:"courseController"
	  })
	  .when("/students",{
	  	templateUrl:"Students.html",
	  	//controller:"studentController"
	  })
	 
})

app.controller("homeController",function($scope){
	$scope.message="HOME-PAGE";
})
app.controller("courseController",function($scope){
	$scope.courses=["C","C++","java","python","JS"];
})	
