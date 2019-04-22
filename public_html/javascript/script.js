function i(id) {
    return document.getElementById(id);
}

function q(query) {
    return document.querySelector(query);
}

function c(el, id) {
    let element = document.createElement(el);
    if (id) {
        element.id = id;
    }
    return element;
}

function getData(url, funct) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                funct(JSON.parse(xhr.responseText));
            } catch (e) {
                funct(null, e);
            }
        }
    };
    xhr.send();
}

window.onload = function () {
    console.log("Window loaded!");
    document.querySelectorAll(".page-selector").forEach(selector => {
        selector.onclick = function () {
            location.href = selector.id + ".html";
        }
    });
}