import './style.scss';
// eslint-disable-next-line import/no-cycle
import createKey from './components/key/keys';

const htmlBody = document.body;
const htmlHead = document.head;

// favicon
const favicon = document.createElement('link');
favicon.src = '../public/favicon.ico';
favicon.rel = 'shortcut icon';
favicon.type = 'image/x-icon';
htmlHead.append(favicon);

// main container
const page = document.createElement('main');
page.classList.add('keyboard-page');
htmlBody.append(page);

// keyboard container
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
page.append(keyboardContainer);

// text area
const textArea = document.createElement('textarea');
textArea.classList.add('text-area');
keyboardContainer.append(textArea);

// keyboard
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboardContainer.append(keyboard);
export default { keyboard };

// render keys
async function renderKeys() {
  const responce = await fetch('./keys.json');
  const keysInfo = await responce.json();
  keysInfo[0].keys.forEach((el) => createKey(el));
}
renderKeys();

// sync keys with physical keyboard
window.addEventListener('keydown', (event) => {
  const pressedKey = document.querySelector(`div[data-value = '${event.key.toLowerCase()}']`);
  pressedKey.classList.add('active');
});

window.addEventListener('keyup', (event) => {
  const pressedKey = document.querySelector(`div[data-value = '${event.key.toLowerCase()}']`);
  pressedKey.classList.remove('active');
});
