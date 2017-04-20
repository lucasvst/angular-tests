(function() {
    'use strict';

    angular.module('api.users', [])
    .factory('Users', function() {

        var Users = {},
            userList = [
            {id: 1, name: 'Lucas', role: 'Programmer', location: 'Joinville', twitter: 'lucasvst', pokemon: { name: 'pikachu' }},
            {id: 2, name: 'John', role: 'Architect', location: 'Madrid', twitter: 'johndoe', pokemon: { name: 'charmander' }},
            {id: 3, name: 'Jack', role: 'Doctor', location: 'China', twitter: 'drjack', pokemon: { name: 'killbill' }}
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
