// local_storage.js

// Define a key for local storage to store the game state
const GAME_STATE_KEY = 'gameState';

// Function to save the game state to local storage
function saveGameState(gameState) {
    try {
        // Convert the game state object to a JSON string
        const gameStateJson = JSON.stringify(gameState);
        // Save the JSON string to local storage
        localStorage.setItem(GAME_STATE_KEY, gameStateJson);
        console.log('Game state saved to local storage.');
    } catch (error) {
        console.error('Failed to save game state:', error);
    }
}

// Function to load the game state from local storage
function loadGameState() {
    try {
        // Retrieve the JSON string from local storage
        const gameStateJson = localStorage.getItem(GAME_STATE_KEY);
        if (gameStateJson) {
            // Parse the JSON string to a game state object
            const gameState = JSON.parse(gameStateJson);
            console.log('Game state loaded from local storage.');
            return gameState;
        } else {
            console.log('No game state found in local storage.');
            return null;
        }
    } catch (error) {
        console.error('Failed to load game state:', error);
        return null;
    }
}

// Function to clear the game state from local storage
function clearGameState() {
    try {
        // Remove the game state from local storage
        localStorage.removeItem(GAME_STATE_KEY);
        console.log('Game state cleared from local storage.');
    } catch (error) {
        console.error('Failed to clear game state:', error);
    }
}

// Export the functions to make them available for import in other files
export { saveGameState, loadGameState, clearGameState };
