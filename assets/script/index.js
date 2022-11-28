
'use strict';

import { onEvent, select } from "./functions.js";
import { Shapes } from "./shapes.js";

const btn = select('.btn');
const parent = select('.parent');
const shapes = select('.shapes');
const colors = select('.colors');
const para = select('.para');

const myColors = {
    Blue: '#0080ff',
    Green: '#9f0',
    Orange: '#f90',
    Pink: '#f09',
    Purple: '#8000ff'
}

const array = [];

function createShape() {
    const shape = document.createElement('div');
    shape.classList.add(shapes.value);
    parent.appendChild(shape);
    shape.style.backgroundColor = myColors[colors.value];

    array.push(shape);

    onEvent('click', shape, function () {
        para.innerText = `Unit ${array.indexOf(shape) + 1} : ${colors.value}  ${shapes.value}`;
    });
}


let count = 0;
onEvent('click', btn, function () {
    if (count > 23) {
        para.innerText = 'Max Shapes reached';
        return;
    }

    createShape();

    count += 1;


});


