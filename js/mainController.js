var app = angular.module('monthEnd');

app.controller('MainController', function($scope, $firebaseObject) {
    var ref = new Firebase("https://sinet-monthend.firebaseio.com");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding

    syncObject.$bindTo($scope, "data");



    $scope.toggleStatus = function(obj) {


        if (obj.Status === 'In-Process') {
            obj.Status = 'Completed';
        } else if (obj.Status === 'Completed') {
            obj.Status = 'In-Process';
        };


    };
});
