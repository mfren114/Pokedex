// ES6 import
import VoiceRSSWebApi from 'voice-rss';

// Instantiate the client with your API key
const VoiceRSS = new VoiceRSSWebApi('cf42e2847e1b4a1cba2997baa7b39959');

// Use the getAudio method with promises
VoiceRSS.getAudio('intro')
    .then(audioUrl => new Audio(audioUrl).play())
    .catch(error => console.error(error));