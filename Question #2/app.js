const favicon = document.getElementById("favicon");

function changeFavicon(file) {
    if(file == 'default') {
        favicon.setAttribute("href", 'javascript:;');
    }
    else {
        console.log(file)
        favicon.setAttribute("href", file);
    }
}