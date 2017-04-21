describe('components.profile', function() {

    var $controller;

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.profile'));

    beforeEach(inject(function(_$controller_) {

        $controller = _$controller_;
    }));

    describe('ProfileController', function() {

        var ProfileController, singleUser;

        beforeEach(function() {

            singleUser = {
                id: 2,
                name: 'John',
                role: 'Architect',
                location: 'Madrid',
                twitter: 'johndoe',
                pokemon: { name: 'charmander' }
            };

            ProfileController = $controller('ProfileController', { resolvedUser: singleUser });
        });

        it('should be defined', function() {

            expect(ProfileController).toBeDefined();
        });
    });

    describe('ProfileController with a valid resolved user', function() {

        var ProfileController, singleUser;

        beforeEach(function() {

            singleUser = {
                id: 2,
                name: 'John',
                role: 'Architect',
                location: 'Madrid',
                twitter: 'johndoe',
                pokemon: { name: 'charmander' }
            };

            ProfileController = $controller('ProfileController', { resolvedUser: singleUser });
        });

        it('should set the view model user object to the resolvedUser', function() {
            expect(ProfileController.user).toEqual(singleUser);
        });
    });
});
