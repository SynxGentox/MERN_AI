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











