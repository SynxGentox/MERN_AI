function readUser(user) {
    const head = document.createElement("h1");
    const name = document.createElement("h4");
    const age = document.createElement("h4");
    const email = document.createElement("h4");
    const container = document.createElement("div");

    head.textContent = "User Information";
    name.textContent = "Name: " + user.name;
    age.textContent = "Age: " +user.age;
    email.textContent = "Email: " +user.email;

    container.append(head, name, age, email);
    document.body.append(container);
}

const user = {
    name: "Aryan",
    age: 22,
    email: "aryan.verma.iosdev@gmail.com"
};

readUser(user)