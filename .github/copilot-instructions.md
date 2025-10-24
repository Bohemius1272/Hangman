# Hangman Game - AI Assistant Instructions

This document provides essential context for AI assistants working with this Hangman game codebase.

## Project Overview
This is a browser-based Hangman game implementation using HTML, CSS, and vanilla JavaScript. The game follows a simple MVC-like pattern where:
- `hangman.html` - Contains the game UI structure
- `hangman.js` - Handles game logic and DOM manipulation
- `hangman.css` - Manages styling and layout
- `images/` - Contains game state images (hangman0.gif through hangman6.gif)

## Key Components

### Game State Management
- Word selection from `POSSIBLE_WORDS` array in `hangman.js`
- Game state tracked through global variables:
  - `word` - Current word to guess
  - `guesses` - String containing all guessed letters
  - `guess_count` - Remaining guesses (starts at 6)

### Core Functions
- `newGame()` - Initializes a new game session
- `guessLetter()` - Processes player letter guesses
- `updatePage()` - Updates UI based on game state

### UI Elements (referenced by ID)
- `hangmanImage` - Displays current game state image
- `clue` - Shows word progress with underscores and revealed letters
- `guess` - Input field for letter guesses
- `guesses` - Displays all guessed letters

## Development Patterns

### Image Convention
- Game state images follow naming pattern: `hangman[0-6].gif`
- Higher numbers indicate fewer remaining guesses
- Example: `hangman6.gif` is initial state, `hangman0.gif` is game over

### State Updates
All UI updates flow through `updatePage()` function, which:
1. Builds clue string with revealed letters
2. Updates guessed letters display
3. Updates hangman image based on remaining guesses

### Debugging
Console logs are placed strategically for game state tracking:
- Word selection: `Word chosen was ${word}`
- Incorrect guesses: `Incorrect guess!`
- Guess count: `Current GuessCount: ${guess_count}`

## Project Structure
```
.
├── hangman.html    # Main game interface
├── hangman.js      # Game logic
├── hangman.css     # Styling
└── images/         # Game state images
    └── hangman[0-6].gif
```