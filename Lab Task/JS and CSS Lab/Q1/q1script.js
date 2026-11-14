function checkNumber(num) {
    if (num == 0) {
        alert("Zero");
        return;
    }
    else if (num > 0) {
        alert("Positive number");
        return;
    }
    else {
        alert("Negative number");
        return;
    }
}

document.getElementById("checkButton").addEventListener("click", function () {
    const input = document.getElementById("numInput");
    const num = Number(input.value);

    if (input.value == "" || !Number.isInteger(num)) {
        alert("Please enter a valid number");
        return;
    }

    checkNumber(num);
});