describe('UsersController', function() {

    var $controller, UsersController, UsersFactory;

    var userList = [
        {id: 1, name: 'Lucas', role: 'Programmer', location: 'Joinville', twitter: 'lucasvst'},
        {id: 2, name: 'John', role: 'Architect', location: 'Madrid', twitter: 'johndoe'}
    ];

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.users'));
    beforeEach(angular.mock.module('api.users'));

    beforeEach(inject(function(_$controller_, _Users_) {

        $controller = _$controller_;
        UsersFactory = _Users_;

        spyOn(UsersFactory, 'all').and.callFake(function() {
            return userList;
        });

        UsersController = $controller('UsersController', { Users: UsersFactory });
    }));

    /**
     * Test cases
     */

    it('should be defined', function() {
        expect(UsersController).toBeDefined();
    });

    it('should initialize with a call to Users.all()', function() {
        expect(UsersFactory.all).toHaveBeenCalled();
        expect(UsersController.users).toEqual(userList);
    });
});
