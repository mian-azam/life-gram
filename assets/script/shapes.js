'use strict'

class Shapes {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    setColor() {
        return this._name;
    }
    setName() {
        return this._color;
    }
    getInfo() {
        return `${this._color} ${this._name}`
    }
}


export { Shapes };