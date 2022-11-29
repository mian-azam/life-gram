'use strict'

class User {
    #id;
    #name;
    #userName;
    #email;
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {
        return this.#id
    }
    get name() {
        return this.#name
    }
    getUserName() {
        return this.#userName
    }
    get email() {
        return this.#email
    }
}

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }
    get groups() {
        return this.#groups;
    }
    get canMonetize() {
        return this.#canMonetize;
    }

    getInfo() {
        return `ID: ${this.id} \n Name: ${this.name} \n User Name: ${this.userName} \n Email: ${this.email} \n Pages: ${this.#pages} \n Groups: ${this.#groups}`
    }
}

export { User, Subscriber };