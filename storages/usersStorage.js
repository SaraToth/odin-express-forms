//This class lets us simulate working with a database
class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName }) {
        const id = this.id;
        this.storage[id] = { id, firstName, lastName };
        this.id++;
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUsers(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName }) {
        this.storage[id] = { id, firstName, lastName };
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}
//Ensures only one instance is ever used
// Singleton pattern
module.exports = new UsersStorage();
