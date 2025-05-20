class UsersStorage {
    constructor() {
        this.storage = {};
        this.id = 0;
    }

    addUser({ firstName, lastName, email, age, bio }) {
        const id = this.id; // Starts at 0 by default
        this.storage[id] = { id, firstName, lastName, email, age, bio };
        this.id++; // increments for each user
    }

    getUsers() {
        return Object.values(this.storage);
    }

    getUser(id) {
        return this.storage[id];
    }

    updateUser(id, { firstName, lastName, email, age, bio }) {
        this.storage[id] = {id, firstName, lastName, email, age, bio };
    }

    deleteUser(id) {
        delete this.storage[id];
    }
}

//Export an instance of it - somewhat like a factory function
module.exports = new UsersStorage();