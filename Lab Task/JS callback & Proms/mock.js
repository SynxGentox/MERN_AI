


const arr = [10, 5, 20, 20, 8, 15];
function secondLarge() {
    let fstLarge = 0;
    let sndLarge = 0; 
    for (let i = 0; i < arr.length; i++) {
        if (fstLarge < arr[i]) {
            sndLarge = fstLarge;
            fstLarge = arr[i];
            continue
        }
    }
    if (fstLarge === sndLarge) {
        
        console.log("There is no 2nd large element in the array");
        return
    }
    else {
        console.log(sndLarge);
        return
    }
}

secondLarge()