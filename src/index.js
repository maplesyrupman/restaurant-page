import renderHome from './home';

let content = document.getElementById('content');

function clearContent() {
    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
}

renderHome(content);
