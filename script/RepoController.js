(function(){

  var module = angular.module("githubViewer");

  var RepoController = function($scope, $routeParams, github){

    var onRepoStars = function(data){
      $scope.repostar = data;
    };
    var onRepoSubs = function(data){
      $scope.reposubs = data;
    };
    var onRepoCont = function(data){
      $scope.repocont = data;
    };

    var onError = function(reason){
      $scope.error = reason;
    };

    var reponame = $routeParams.reponame;
    var username = $routeParams.username;

    github.getRepoStargazers(username, reponame)
    .then(onRepoStars, onError);

    github.getRepoContributors(username, reponame)
    .then(onRepoCont, onError);

    github.getRepoSubscribers(username, reponame)
    .then(onRepoSubs, onError);

  };

  module.controller("RepoController", RepoController);
}());
