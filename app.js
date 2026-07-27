let startBtn = document.querySelector(".start-btn button");
let mainBody = document.querySelector(".main-body");
let universe = document.querySelector("#universe span");
let characList = document.querySelector("#characteris ul");
let hintList = document.querySelector("#hint-cont ul");
let hintBtn = document.querySelector("#getHint");
let newCharacBtn = document.querySelector("#newCharac");
let userInput = document.querySelector("#guess-field input");
let guessBtn = document.querySelector("#guess");
let result = document.querySelector("#result p");

startBtn.addEventListener("click", () => {
    let parent = startBtn.parentElement;
    parent.classList.add("hide");
    mainBody.classList.remove("hide");
    startGame();
});

newCharacBtn.addEventListener("click", () => {
    startGame();
});

async function getCharcter() {
    let response = await fetch("./characters.json");
    let data = await response.json();
    return data;
}

function startGame() {
    getCharcter().then((resolve) => {
        let randomNum = Math.floor(Math.random() * 10);
        // console.log(randomNum);
        let gameGuess = resolve[randomNum].name;

        universe.innerText = resolve[randomNum].universe;

        getCharacteristics(resolve[randomNum].characteristics);
        getHint(resolve[randomNum].hints);

        guessBtn.addEventListener("click", () => {
            showGuessResult(userInput.value, gameGuess);
        });
    });
}

function showGuessResult(userGuess, gameGuess) {
    if (checkGuess(userGuess, gameGuess)) {
        result.innerText = "You Guess Correct.";
    } else {
        result.innerText = "Your Guess is not Correct, try again.";
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

function getHint(hints) {
    hintBtn.addEventListener('click', () => {
        for (hint of hints) {
            let li = document.createElement("li");
            li.innerText = hint;
            hintList.appendChild(li);
        }
        // hints = "";
    });
}
