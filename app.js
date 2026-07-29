let startBtn = document.querySelector(".start-btn button");
let mainBody = document.querySelector(".main-body");
let universe = document.querySelector("#universe span");
let characList = document.querySelector("#characteris ul");

let hintList = document.querySelector("#hint-cont ul");
let hintBtn = document.querySelector("#getHint");
let hintBadge = document.querySelector("#getHint span");
let newCharacBtn = document.querySelector("#newCharac");
let userInput = document.querySelector("#guess-field input");
let guessBtn = document.querySelector("#guess");
let result = document.querySelector(".result-container p");
let wngResult = document.querySelector("#wrongResult p");
let exitResultsIcon = document.querySelector(".result-container i");
// let show = document.querySelector("#show");
let conta = document.querySelector("#image-cont");

let imgContParent = conta.parentElement;

let currentHints = [];
let attempt = 3;
let gameGuess = "";

// keep it to style this section it help
// show.addEventListener("click", () => {
//     let body = document.querySelector("body");
//     parent.classList.remove("hide");
// });

exitResultsIcon.addEventListener("click", () => {
    userInput.value = "";
    imgContParent.classList.add("hide");              
    resetPreviousData(characList);
    startGame();
});

function resetPreviousData(list) {
    characList.innerHTML = "";
    hintList.innerHTML = "";
}

startBtn.addEventListener("click", () => {
    let parent = startBtn.parentElement;
    parent.classList.add("hide");
    mainBody.classList.remove("hide");
    startGame();
});

newCharacBtn.addEventListener("click", () => {
    userInput.value = "";
    wngResult.innerText = "";
    resetPreviousData(characList);
    startGame();

});

async function getCharcter() {
    let response = await fetch("./characters.json");
    let data = await response.json();
    return data;
}

function startGame() {
    getCharcter().then((resolve) => {
        attempt = 3;
        let randomNum = Math.floor(Math.random() * 10);
        // console.log(randomNum);
        gameGuess = resolve[randomNum].name;
        universe.innerText = resolve[randomNum].universe;
        getCharacteristics(resolve[randomNum].characteristics);
        getHint(resolve[randomNum].hints);

    });
}

guessBtn.addEventListener("click", () => {
    if (showGuessResult(userInput.value, gameGuess)) {
        wngResult.innerText = "";
        imgContParent.classList.remove("hide");               
    } else {
        wngResult.innerText = "Your Guess is not correct, try again."
    }
});

function getHint(hintsList) {
    currentHints = hintsList;
    attempt = 3;
    hintBadge.innerText = attempt;
}

hintBtn.addEventListener('click', () => {
    if (attempt == 0) return "false";
    attempt--;
    let li = document.createElement("li");
    li.innerText = currentHints[attempt];
    hintList.appendChild(li);
    hintBadge.innerText = attempt;
});

function showGuessResult(userGuess, gameGuess) {
    if (checkGuess(userGuess, gameGuess)) {
        result.innerText = "You Guess Correct.";
        return true;
    } else {
        result.innerText = "Your Guess is not Correct, try again.";
        return false;
    }
}

function checkGuess(userGuess, gameGuess) {
    if (userGuess.toLowerCase() == gameGuess.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}

function getCharacteristics(datas) {
    for (data of datas) {
        let li = document.createElement("li");
        li.innerText = data;
        characList.appendChild(li);
    }
}


