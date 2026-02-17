// ES6 import
import VoiceRSSWebApi from 'voice-rss';

// Instantiate the client with your API key
const VoiceRSS = new VoiceRSSWebApi('f8c624b57169489894549149345acbda');

// Use the getAudio method with promises
VoiceRSS.getAudio('pokemon-list')
    .then(audioUrl => new Audio(audioUrl).play())
    .catch(error => console.error(error));