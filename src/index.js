// import to do data
import todos from '../data/todo-list.js';

// import template function
import template from './template-list.js';
import header from './header-template.js';

// import html to dom function
import htmlToDOM from './html-to-DOM.js';

// reference the parent section
const taskList = document.getElementById('lists');
const title = document.getElementById('header');

// loop through todo data
todos.forEach(item => {
    // convert list object to html using template
    const html = template(item);
    // convert html to dom using html-to-dom
    const dom = htmlToDOM(html);
    // append to list parent
    taskList.appendChild(dom);
});

const hOne = header();
const headerDom = htmlToDOM(hOne);
title.appendChild(headerDom);