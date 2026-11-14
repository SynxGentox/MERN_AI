const button = document.getElementById("themeButton");
const card = document.getElementById("card");
const title = document.getElementById("title");
const desc = document.getElementById("description");
const body = document.querySelector("body");

title.textContent = "Welcome to my website";
desc.textContent = "You may change theme as per your preference";
button.textContent = "Enable Dark";

let isLight = false;

button.addEventListener("click", () => {
    if (isLight) {
        isLight = false;

        body.classList.remove("dark");
        body.classList.add("light");
        button.textContent = "Enable Dark";
    }
    else {
        isLight = true;
        body.classList.remove("light");
        body.classList.add("dark");
        button.textContent = "Enable Light";
    }
});
