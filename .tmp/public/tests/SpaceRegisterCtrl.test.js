describe('RegisterCtrl', function() {

    var $scope;
    var RegisterCtrl;
    var Validate;

    beforeEach(module('app.controllers'));

    beforeEach(inject(function($rootScope, $controller, $injector) {
        $scope = $rootScope.$new();
        RegisterCtrl = $controller('RegisterCtrl', {$scope: $scope});
    }));

    it('should require a username', function() {
        $scope.register({});
        expect($scope.error.identifier).to.not.equal('');
    });

});