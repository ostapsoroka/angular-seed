'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.service.imgurService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
    
  });
}])

.controller('View1Ctrl', ['$scope', 'imgurService', function($scope, imgurService) {
  $scope.originalLink = "http://imgur.com/gallery/RufuZ";
 $scope.recalculatedLink;
  $scope.update = function(originalLink) {
        imgurService.getImgUrl(originalLink).then(function(result){
           $scope.recalculatedLink = result;
        });
      };
}]);