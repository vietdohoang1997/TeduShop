/// <reference path="../../bower_components/angular/angular.js" />

//Create the module
var myApp = angular.module('myModule', []);

//Register the controller with the module 
myApp.controller("myController", myController);

myController.$inject($scope);


//Create the controller
function myController($scope) {
    $scope.message = "This is my message from Controller";
}
