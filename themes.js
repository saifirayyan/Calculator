const theme = document.querySelector(".theme");
const toggle = document.querySelector(".toggle");
const body = document.body;
toggle.addEventListener("click", () => {
    if(body.classList.contains('theme-0')){
        body.className = 'theme-1'
    }else if(body.classList.contains('theme-1')){
        body.className = 'theme-2'
    }else{
        body.className = 'theme-0'
    }
    localStorage.setItem('theme',`${body.className}`);
});
if(localStorage.getItem('theme')==="theme-1"){
    body.className = 'theme-1';
}
if(localStorage.getItem('theme')==='theme-2'){
    body.className = 'theme-2';
}