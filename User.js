export default class User {
    constructor({ id, firstname, surname, age }) {
        this.id = id;
        this.firstname = firstname
        this.surname = surname
        this.age = age
    }

    get userId() {
        return this.id;
    }

    get userName() {
        return this.firstname;
    }

    get userSurname() {
        return this.surname;
    }

    get userAge() {
        return this.age;
    }
}