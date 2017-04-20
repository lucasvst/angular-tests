(function() {
	'use strict';

	angular.module('api.users', [])
	.factory('Users', function() {

		var Users = {},
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
		];

		Users.all = function() {
			return userList;
		};

		Users.findById = function(id) {

			return userList.find(function(user) {
				return user.id === id;
			});
		}

		return Users;
	});

})();