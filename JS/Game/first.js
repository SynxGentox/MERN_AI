function numCheck() {
    const x = 5
    if (x > 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }

    if (x % 2 == 0) {
        console.log("Even")
    }
    else {
        console.log("Odd")
    }

    if (x > 100) {
        console.log("Greater than 100")
    }
    else {
        console.log("Not greater than 100")
    }

    if (x % 3 == 0 && x & 5 == 0) {
        console.log("Yes, it's divisible by 3 and 5")
    }
    else {
        console.log("No, it's not divisible by 3 and 5")
    }
}
