//
//
//

///

function studentCard() {
    for (let i = 0; i < 3; i++) {
        const card = document.createElement("div");
        const head = document.createElement("h2");
        const para = document.createElement("p");
        const button = document.createElement("button");

        card.classList.add("profile-card");
        head.classList.add("student-name");
        para.classList.add("course");
        button.classList.add("profile-btn");

        head.textContent = "Student " + (i + 1);
        para.textContent = "Para" + (i + 1);
        button.textContent = "Button" + (i + 1);

        card.append(head, para, button);
        container.append(card);
    }
}


function cardTheme() {
    const container = document.getElementById("themeContainer");
    const card = document.createElement("div");
    const learnHead = document.createElement("h2");
    const themePara = document.createElement("p");
    const themeButton = document.createElement("button");

    card.classList.add("light");
    learnHead.classList.add("head");
    themePara.classList.add("para");
    themeButton.classList.add("button");

    learnHead.textContent = "JavaScript";
    themePara.textContent = "Learning DOM Manipulation";
    themeButton.textContent = "Change Theme";

    card.append(learnHead, themePara, themeButton);

    container.append(card);

    themeButton.addEventListener("click", () => {
        card.classList.toggle("dark");
    });
}

function shoppingCart() {
    const container = document.createElement("div");
    
    const cartHead = document.createElement("h2");
    const itemHead = document.createElement("h4");
    const itemPrice = document.createElement("p");
    const itemButton = document.createElement("button");

    cartHead.classList.add("cartHead");
    itemHead.classList.add("itemHead");
    itemPrice.classList.add("itemPrice");
    itemButton.classList.add("itemButton");

    (cartHead, itemHead).textContent = ("My Cart", "Laptop");

}



let num = 50;
console.log(num);


const numbers = [20, 35, 40, 35, 65, 28, 40];
const seen = new Set();
const dups = [];

for (num of numbers) {
    if (seen.has(num)) {
        dups.push(num);
    }
    else {
        seen.add(num);
    }
}
console.log("These are dublicate values: " + dups);




