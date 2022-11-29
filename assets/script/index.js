
'use strict';

import { onEvent, select } from "./functions.js";
import { User, Subscriber } from "./classes.js";

const btn = select('.post-btn');
const data = select('.data');
const content = select('.content');
const postImg = select('.post-img');
const para = select('.para');
const textarea = select('.textarea');
const userInfoBtn = select('.user-info');



function addPost() {
    window.URL = window.URL || window.webkitURL;
    let img = (postImg.value !== '') ? URL.createObjectURL(postImg.files[0]) : '';
    let date = new Date().toLocaleDateString({ year: "numeric", month: "numeric", day: "numeric" });

    let post = document.createElement('div');
    post.classList.add('postStyle');
    post.innerHTML = `<div class="">
    <h4">Hello</h4>
    <p class="post-date">${date}</p>
</div>
<div class="post-body">
    <p>${textarea.value}</p>
    <div class="post-body-img">
        <img src="${img}"/>
    </div>
</div>`;
    content.prepend(post);
}

function userData() {
    const subscriber = new Subscriber('#234', 'Mian Azam Mehmood', 'mian-azam', 'tarbelte04@gmail.com', 'Mercedes.Ca, IRCC', 'Pakistani Community in WPG');

    let info = document.createElement('div');
    info.classList.add('dataStyle');
    info.innerText = `${subscriber.getInfo()}`;
    data.prepend(info);
}



onEvent('click', btn, function (event) {
    event.preventDefault();
    addPost();
});

onEvent('click', userInfoBtn, function () {
    userData();

});






