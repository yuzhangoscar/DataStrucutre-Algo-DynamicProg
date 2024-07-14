// utils.js
import { v4 as uuidv4 } from 'uuid';

// Example with a combination of words
const adjectives = ['Quick', 'Lazy', 'Happy', 'Sad', 'Brave', 'Clever'];
const nouns = ['Lion', 'Tiger', 'Bear', 'Shark', 'Eagle', 'Panda'];

export function generateRandomUsername() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomId = uuidv4().slice(0, 4); // Short unique identifier
    return `${randomAdjective}${randomNoun}_${randomId}`;
}
