(function(){
    var app = angular.module("githubViewer", ["ngRoute", "ngMaterial"]);

    app.config(function($routeProvider){
	$routeProvider
	    .when("/main", {
		templateUrl: "views/main.html",
		controller: "MainController"
	    })
	    .when("/user/:username", {
		templateUrl: "views/user.html",
		controller: "UserController"
	    })
	    .when("/repo/:username/:reponame", { // params used in RepoController
		templateUrl: "views/repo.html",
		controller: "RepoController"
	    })
	    .otherwise({redirectTo:"/main"});
    });
}());
