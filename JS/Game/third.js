// MARK: - JS Challange - 1.

// 1. Guess the number game.

function guessNum() {
    let target = 3
    let guess;

    while (guess != target) {
        guess = Number(prompt("Enter your guess: "));       // Asking for the guess from user

        if (guess == target) {
            alert("You win!!!");
        }
        else {
            alert("You may try again!");
        }
    }
}


// 2. Mini shopping list game
function shoppingList() {
    let items = ["Milk", "Bread", "Chips", "Chocolate", "Juice"];
    let edit = true;
    items.push(1);

    console.log(items.concat(1, 2, 3));

    // Printing the list of items
    alert(items);

    // Looping unit unit user dont want to add new item(empty input).
    while (edit) {
        // Asking for new item.
        let newItem = prompt("Do you want to add items to list? or leave it empty");

        // If no item it entered then exit the loop
        if (newItem == "" || newItem == null) {
            edit = false;
        }
        // Adding item to list.
        else {
            items.push(newItem);
            alert(newItem + " added to list");
        }
    }

    // Printing items again.
    alert(items);
}


function numChallenge() {
    let numArr = [];
    let newNum = Number(prompt("Enter the number to get sum and even range: "));
    let sum = 0;

    // Checking condition suitable for even range and sum of range.
    if (newNum > 1) {
        for (let i = 2; i <= newNum; i += 2) {
            numArr.push(i);
            sum += i;
        }
        alert("Your number range is: " + numArr);
    }
    else {
        alert("Invalid input, Number should be 2 or greater.");
    }

    // Displaying the range sum.
    alert("Sum: " + sum);
}


function game() {
    // Game switch.
    let choice = true;

    do {
        // Currently case sensitive...
        let play = prompt("Do you want to continue playing? Yes/No.");

        // Starting the game for true.
        if (play == "Yes") {
            alert("Starting Game...");
        }
        // Game Over for false.
        else {
            alert("Game Over!");
            choice = false;
        }
    } while (choice)
}


function studentInfo() {

    // Student JSON Object.
    let student = {
        name: prompt("Your name: "),
        age: Number(prompt("Your age: ")),
        course: prompt("Your course: "),
        city: prompt("Your city: "),
        score: Number(prompt("Your score: "))
    };

    // Displaying the student info.
    for (let key in student) {
        alert(key + ": " + student[key]);
    }
}

// MARK: - JS Methods...

/*
push    // adds item at the end. (modifies original)
pop     // deleted item from the end. (modifies original)
unshift // adds item at the start of the array by shifting the index of the array. (modifies original)
shift   // deleted item from start and returns the array. (modifies original)
concat  // gives a new array by adds 2 or more array without modifying original arrays. (Does not modifies original)
slice   // gives a sliced range from the array where range will be n, m, items would be sliced from n to m-1 index. (modifies original array)
splice  // takes 3 inputs (n, m , str). Here, n is the starting index(where to start deleting), m is number of items to be deleted from n, str is the item that you can add at the n index. (modifies original array)
*/

// Program to count vowels.

// Using funciton.
function countVowels(str) {
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    let lowerStr = str.toLowerCase();

    for (let s of str) {
        if (vowel.includes(s)) {
            count += 1
        }
    }
    return count;
}

// Using 'arrow-funciton'(Same as closure in other languages).
const arrowVowels = (str) => {
    let vowel = ["a", "e", "i", "o", "u"];
    let count = 0;
    let lowerStr = str.toLowerCase();

    for (let s of str) {
        if (vowel.includes(s)) {
            count += 1
        }
    }
    return count;
}

// Calling
// console.log(countVowels("apple"));



// MARK: - JS Challange - 2.

function moviesList() {

    let movies = ["3 Idiots", "Dangal", "KGF", "Chhichhore", "War"];

    movies.push("End Game")
    movies.unshift("Infinity War");
    movies.shift();

    let series = ["Loki", "Alice in Borderlands", "Attack on Titans"];
    movies.concat(series);
    movies.slice(2, 5);
    movies.splice((movies.length) / 2, 1, "Dragon balls", "JJK");
    movies.splice(2, 1, "Naruto");
    console.log(movies);
}

function shoppingCart() {
    let cart = ["Laptop", "Mouse", "Keyboard"];
    cart.push("headphones");
    cart.pop();
    cart.unshift("Monitor");
    cart.shift();
    cart.concat("USB Cable", "WebCam");
    let newCart = ["SSD", "Nvme-M.2", "Gpu"];
    cart.splice(newCart.length / 2);

    console.log(cart.concat(newCart));
}

function waitingList() {
    let students = ["Rahul", "Priya", "Aman", "Sneha"];
    students.push("Karen");
    students.unshift("Riya");
    students.pop();
    let newStudets = ["Neha", "Arjun", "Simran"];
    let newList = students.concat(newStudets);
    console.log(newList.slice((newList.length / 2) - 1, (newList.length / 2) + 1));
}

function foodList() {
    let orders = ["Pizza", "Burger", "Pasta"];
    orders.push("Momos");
    orders.unshift("Biryani");
    orders.shift();
    orders.pop();
    orders.push("Sandwitch", "Fries");
    orders.splice(orders.indexOf("Pasta"), 1);
    orders.splice(orders.indexOf("Burger"), 1, "Chowmein");
    orders.slice(0, 3);

    console.log(orders);
}

function part3() {
    let numbers = [10, 20, 30, 40, 50, 60];

    // Q1
    let index40 = numbers.indexOf(40);
    let greater40 = numbers.slice(index40, index40 + 3);
    console.log(greater40);

    // Q2
    let numbers2 = [10, 20, 30, 40, 50];
    numbers2.splice(numbers.indexOf(30), 1);
    console.log(numbers2);

    // Q3
    let colors = ["Red", "Blue", "Green", "Yellow"];
    colors.splice(colors.indexOf("Blue"), 2, "Pink", "Purple");

    console.log(colors);

    let teamA = ["Rahul", "Aman", "Priya"];
    let teamB = ["Sneha", "Karan", "Neha"];

    let newGrp = teamA.concat(teamB);

    console.log(newGrp.slice(0, 4));
}

shoppingCart()