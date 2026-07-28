# 🎭 GuessVerse

GuessVerse is a character guessing game built with **HTML, CSS, and Vanilla JavaScript**.

The game randomly selects a character from different fictional universes, and the player has to figure out who it is using the given characteristics and a limited number of hints.

> 🚧 **GuessVerse is currently under development.**  
> The core game logic is being built first. UI improvements, additional characters, and other features will be added later.

## 🎮 How It Works

1. The game randomly selects a character.
2. The character's universe and basic characteristics are displayed.
3. Enter the character's name and submit your guess.
4. If you're stuck, use one of the limited hints.
5. Keep guessing until you identify the character.

## 🌌 Current Universes

The initial character database contains characters from:

- Naruto
- One Piece
- Marvel

More characters and universes may be added later.

## ✨ Features

### Currently Working / In Progress

- Random character selection
- Character data loaded from a local JSON file
- Character universe and characteristics
- User guess input
- Limited hint system
- Correct/incorrect guess checking
- Basic game UI

### Planned

- Improved UI and styling
- Better game feedback
- Play Again / new character functionality
- Larger character database
- More universes
- General bug fixes and polish

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- JSON
- Fetch API

## 📁 Project Structure

    GuessVerse/
    │
    ├── index.html
    ├── style.css
    ├── app.js
    └── characters.json

`characters.json` acts as the character database, while JavaScript uses the Fetch API to load and work with the character data.

## 🎯 Why I Built This

I built GuessVerse as a mini project to practice JavaScript concepts through something more interactive than a typical beginner project.

The project helps me practice:

- Fetch API
- Promises / asynchronous JavaScript
- DOM manipulation
- Event handling
- Arrays and objects
- Random selection
- Conditional logic
- Working with JSON data
- Managing simple game state

## 🚀 Running Locally

Clone the repository:

    git clone <your-repository-url>

Open the project folder in VS Code and run `index.html` using **Live Server**.

Using a local server is recommended because the project fetches character data from `characters.json`.

## 📌 Project Status

🚧 **Work in Progress**

The current focus is getting the complete game logic working correctly before spending time on the final design and styling.

---

Built as a JavaScript practice project.