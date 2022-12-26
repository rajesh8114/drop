let openButton = document.querySelector('#open');
let closeButton = document.querySelector('#close');
let div = document.querySelector("div");
openButton.addEventListener('click',()=>{
    div.classList.remove('hide')
});
closeButton.addEventListener('click',()=>{
    div.classList.add('hide');
})