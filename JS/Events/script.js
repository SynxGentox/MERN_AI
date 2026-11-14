let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    alert("btn1 was clicked");
};

btn1.onclick = () => {
    alert("btn1 was clicked(over ridded the original action)");
};

let btn2 = document.querySelector("#btn2");
btn2.onclick = () => {
    alert("btn2 was clicked");
};

btn2.oncursorover = () => {
    console.log("you hovered over btn 2");
};


// Event Listener and Toggle button
btn1.addEventListener("click", () => {
    console.log("clicked");
})




let btn = document.querySelector("button");
let body = document.querySelector("body");

let currMode = "light";

btn.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor = "black"
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
                // document.querySelector("body").style.backgroundColor = "white"
                body.classList.add("light");
                body.classList.remove("dark");

    }
  console.log(currMode);
})



