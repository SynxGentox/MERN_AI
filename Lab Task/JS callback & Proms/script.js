



// via callback hell
function order(nextItem) {
    setTimeout(() => {
        console.log("Order placed successfully!");
        if (nextItem) {
        nextItem();
    }
    }, 1000)
    
}



order(() => {
    setTimeout(() => {
        console.log("Payment completed!");
        order(() => {
            setTimeout(() => {
                console.log("Your order has been packed!");
                order(() => {
                    setTimeout(() => {
                        console.log("Your order has been shipped!");
                        order(() => {
                            setTimeout(() => {
                                console.log("Order delivered successfully!");

                            }, 1000)
                        })
                    }, 2000)
                })
            }, 1000)
        })
    }, 2000)
})




// via Promises
function placeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order placed successfully!");
            resolve("success!");
        }, 1000);
    });
}

function completePayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment completed!");
            resolve("success!");
        }, 2000);
    });
}

function packOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your order has been packed!");
            resolve("success!");
        }, 1000);
    });
}

function shipOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your order has been shipped!");
            resolve("success!");
        }, 2000);
    });
}

function deliverOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered successfully!");
            resolve("success!");
        }, 1000);
    });
}





// via Promises chain
function order(state, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(state);
            resolve("success!");
        }, timer);
    })
}

order("Order placed successfully!", 1000)
    .then((res) => {
        return order("Payment completed!", 2000)
    })
    .then((res) => {
        return order("Your order has been packed!", 1000)
    })
    .then((res) => {
        return order("Your order has been shipped!", 2000)
    })
    .then((res) => {
        return order("Order delivered successfully!", 1000)
    })





// via async and awaits
function order(state, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(state);
            resolve("success!");
        }, timer)
    });
}

async function getOrderState() {
    await order("Order placed successfully!",    1000);
    await order("Payment completed!",            2000);
    await order("Your order has been packed!",   1000);
    await order("Your order has been shipped!",  2000);
    await order("Order delivered successfully!", 1000);
}
