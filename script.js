var app=angular.module("demo",["ngRoute"])
.config(function($routeProvider){
	$routeProvider
	  .when("/home",{
	  	template:"pages/home.html",
	  	controller:"homeController"
	  })
	  .when("/course",{
	  	template:"pages/course.html",
	  	controller:"courseController"
	  })
	  .when("/student",{
	  	template:"pages/Students.html",
	  	controller:"studentController"
	  })
	 
})

.controller("homeController",function($scope){
	$scope.message="HOME-PAGE";
})
.controller("courseController",function($scope){
	$scope.courses=["C","C++","java","python","JS"];
})	