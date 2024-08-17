const keyMap = {
  'a': { key: 'c-key', audio: new Audio('audio/C.wav') },
  's': { key: 'd-key', audio: new Audio('audio/D.wav') },
  'd': { key: 'e-key', audio: new Audio('audio/E.wav') },
  'f': { key: 'f-key', audio: new Audio('audio/F.wav') },
  'g': { key: 'g-key', audio: new Audio('audio/G.wav') },
  'h': { key: 'a-key', audio: new Audio('audio/A.wav') },
  'j': { key: 'b-key', audio: new Audio('audio/B.wav') },
  'k': { key: 'high-c-key', audio: new Audio('audio/C8.wav') },
  'w': { key: 'c-sharp-key', audio: new Audio('audio/C#.wav') },
  'e': { key: 'd-sharp-key', audio: new Audio('audio/D#.wav') },
  't': { key: 'f-sharp-key', audio: new Audio('audio/F#.wav') },
  'y': { key: 'g-sharp-key', audio: new Audio('audio/G#.wav') },
  'u': { key: 'a-sharp-key', audio: new Audio('audio/A#.wav') }
};

function keyPlay(event) {
  const keyInfo = keyMap[event.key];
  if (keyInfo) {
    console.log(`Playing sound for key: ${event.key}`);
    const key = keyInfo.key;
    document.getElementById(key).style.backgroundColor = 'aquamarine';
    document.getElementById(key).style.boxShadow = '1px 2px';

    // Riproduci l'audio associato al tasto
    keyInfo.audio.currentTime = 0;
    keyInfo.audio.play();
 }
}

function keyStop(event) {
  const keyInfo = keyMap[event.key];
  if (keyInfo) {
    const key = keyInfo.key;
    document.getElementById(key).style.backgroundColor = '';
    document.getElementById(key).style.boxShadow = '';
  }
}

document.addEventListener('keydown', keyPlay);
document.addEventListener('keyup', keyStop);