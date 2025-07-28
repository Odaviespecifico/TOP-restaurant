import './style.css';
import { renderContent, renderAbout, clearContent } from './modules/renderDOM';

console.log("Hello, World!");

window.onload = function() {
    renderContent();
};

let home = document.querySelector('#home')
home.addEventListener('click', () => {
    clearContent();
    renderContent();
});

let about = document.querySelector('#about')
about.addEventListener('click', () => {
    clearContent();
    renderAbout();
});
