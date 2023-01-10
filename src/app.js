const hamburgerbutton = document.getElementById('svg')
const navlist = document.getElementById('nav-list')

function togglebutton(params) {
    navlist.classList.toggle('show')
}
hamburgerbutton.addEventListener('click' ,togglebutton)