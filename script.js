let button;

let onload = function () {
    button = document.getElementById("button")
    click()
}

let click = function () {
    button.addEventListener("click", collapse)
}

let collapse = function () {
    let content = document.getElementById("dropdownContent");

    if (content.style.display === "block") {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
}

window.onload = onload;