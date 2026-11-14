const testContent = document.getElementById("testContent");
const keyInput = document.getElementById("keyInput");
const testResult = document.getElementById("testResult");
const testArea = document.querySelector(".para");
const paraText = testContent.textContent.trim();

let startTime = null;
let isTracking = false;
let finished = false;

function buildTest() {
    testContent.innerHTML = "";
    paraText.split("").forEach((ch) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = ch;
        testContent.appendChild(span);
    });
}

buildTest();

let charSpans = testContent.querySelectorAll(".char");
charSpans[0].classList.add("current");
keyInput.maxLength = paraText.length;

function resetTest() {
    startTime = null;
    isTracking = false;
    finished = false;
    keyInput.disabled = false;
    keyInput.value = "";
    testResult.classList.add("hidden");
    testResult.textContent = "";
    charSpans.forEach((s) => s.classList.remove("correct", "incorrect", "current"));
    charSpans[0].classList.add("current");
    keyInput.focus();
}

testArea.addEventListener("click", () => keyInput.focus());
document.addEventListener("click", () => keyInput.focus());

document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
        testContent.classList.remove("hidden");
        e.preventDefault();
        resetTest();
    }
});

keyInput.addEventListener("input", () => {
    if (finished) return;

    const inputValue = keyInput.value;
    const currentLength = inputValue.length;

    if (!isTracking && currentLength > 0) {
        startTime = performance.now();
        isTracking = true;
    }

    charSpans.forEach((span, idx) => {
        const typedChar = inputValue[idx];
        span.classList.remove("correct", "incorrect", "current");

        if (typedChar == null) {
            if (idx === currentLength) span.classList.add("current");
        } else if (typedChar === paraText[idx]) {
            span.classList.add("correct");
        } else {
            span.classList.add("incorrect");
        }
    });

    if (currentLength >= paraText.length) {
        calculateFinalScores(inputValue);
    }
});

function calculateFinalScores(finalInput) {
    finished = true;
    const timeInMinutes = (performance.now() - startTime) / 1000 / 60;

    let correctChars = 0;
    for (let i = 0; i < paraText.length; i++) {
        if (finalInput[i] === paraText[i]) correctChars++;
    }

    const wpm = Math.round(correctChars / 5 / timeInMinutes) || 0;
    const cpm = Math.round(correctChars / timeInMinutes) || 0;
    const accuracy = Math.round((correctChars / paraText.length) * 100);

    keyInput.disabled = true;

    testContent.classList.add("hidden");
    testResult.textContent = `Results: ${wpm} wpm / ${cpm} cpm / ${accuracy}% accuracy`;
    testResult.classList.remove("hidden");
}