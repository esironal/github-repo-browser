(function(){
  var github = function($http){

    var getUser = function(username){
      return $http.get("https://api.github.com/users/" + username)
      .then(function(response){
        return response.data;
      });
    };

    var getRepos = function(user){
      return $http.get(user.repos_url)
      .then(function(response){
        return response.data;
      });
    };

    var getRepoStargazers = function(username, reponame){
      var repostar;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
      return $http.get(repoUrl)
      .then(function(response){
        repostar = response.data;
        return $http.get(repoUrl + "/stargazers");
      })
      .then(function(response){
        repostar.stargazers = response.data;
        return repostar;
      });
    };

    var getRepoContributors = function(username, reponame){
      var repocont;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
      return $http.get(repoUrl)
      .then(function(response){
        repocont = response.data;
        return $http.get(repoUrl + "/contributors");
      })
      .then(function(response){
        repocont.contributors = response.data;
        return repocont;
      });
    };

    var getRepoSubscribers = function(username, reponame){
      var reposubs;
      var repoUrl = "https://api.github.com/repos/" + username + "/" + reponame;
      return $http.get(repoUrl)
      .then(function(response){
        reposubs = response.data;
        return $http.get(repoUrl + "/subscribers");
      })
      .then(function(response){
        reposubs.subscribers = response.data;
        return reposubs;
      });
    };

    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoStargazers: getRepoStargazers,
      getRepoContributors: getRepoContributors,
      getRepoSubscribers: getRepoSubscribers
    };
  };

  var module = angular.module("githubViewer");
  module.factory("github", github);
}());
