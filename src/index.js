import renderHome from './home';

let content = document.getElementById('content');
let navLinks = Array.from(document.getElementsByClassName('navItem'));
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        navLinks[displayedTab].classList.remove('selected');
        e.target.classList.add('selected');
        displayedTab = e.target.dataset.index;
    })
})


function clearContent() {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
}

renderHome(content);
navLinks[0].classList.add('selected');
let displayedTab = '0';
