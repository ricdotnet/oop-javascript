export default class User {
    constructor({ firstname, surname, age }) {
        this.firstname = firstname
        this.surname = surname
        this.age = age
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