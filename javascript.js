
//for html
let html = document.querySelector('.fa-html5');
html.addEventListener('mouseover', htmlFunction);

function htmlFunction(){
    html.classList.add('subHtml', 'animate__animated', 'animate__pulse');
}

//for css
let css = document.querySelector('.fa-css3-alt');
css.addEventListener('mouseover', cssFunction);

function cssFunction() {
    css.classList.add('subCss', 'animate__animated', 'animate__pulse');
}

//for bootstrap
let bootstrap = document.querySelector('.fa-bootstrap');
bootstrap.addEventListener('mouseover', bootstrapFunction);

function bootstrapFunction() {
    bootstrap.classList.add('subBootstrap', 'animate__animated', 'animate__pulse');
}


//for javascript
let javascript = document.querySelector('.fa-square-js');
javascript.addEventListener('mouseover', javascriptFunction);

function javascriptFunction() {
    javascript.classList.add('subJavascript', 'animate__animated', 'animate__pulse');
}


//for react
let react = document.querySelector('.fa-react');
react.addEventListener('mouseover', reactFunction);

function reactFunction() {
    react.classList.add('subReact', 'animate__animated', 'animate__pulse');
}

 
 //removing fuction
html.addEventListener('mouseleave', removeFunction);
css.addEventListener('mouseleave', removeFunction);
bootstrap.addEventListener('mouseleave', removeFunction);
javascript.addEventListener('mouseleave', removeFunction);
react.addEventListener('mouseleave', removeFunction);


function removeFunction(){
    html.classList.remove('subHtml', 'animate__animated', 'animate__pulse');
    css.classList.remove('subCss', 'animate__animated', 'animate__pulse');
    bootstrap.classList.remove('subBootstrap', 'animate__animated', 'animate__pulse');
    javascript.classList.remove('subJavascript', 'animate__animated', 'animate__pulse');
    react.classList.remove('subReact', 'animate__animated', 'animate__pulse');
}