describe('Users factory', function() {

	var Users,
		userList = [
			{
				id: 1,
				name: 'Lucas',
				role: 'Programmer',
				location: 'Joinville',
				twitter: 'lucasvst'
			},
			{
				id: 2,
				name: 'John',
				role: 'Architect',
				location: 'Madrid',
				twitter: 'johndoe'
			}
		],
		singleUser = {
			id: 2,
			name: 'John',
			role: 'Architect',
			location: 'Madrid',
			twitter: 'johndoe'
		}
	;

	beforeEach(angular.mock.module('api.users'));

	beforeEach(inject(function(_Users_) {
		Users = _Users_;
	}));

	it('should exist', function() {
		expect(Users).toBeDefined();
	});

	describe('.all()', function() {

		it('should exist', function() {
			expect(Users.all).toBeDefined();
		});

		it('should return a hard-coded list of users', function() {
			expect(Users.all()).toEqual(userList);
		})
	});

	describe('.findById()', function() {

		it('should exist', function() {
			expect(Users.findById).toBeDefined();
		});

		it('should return an user with certain ID, if exists', function() {
			expect(Users.findById(2)).toBeDefined(singleUser);
		});

		it('should return undefined if the user cannot be found', function() {
			expect(Users.findById('ABC')).not.toBeDefined();
		});
	});
});