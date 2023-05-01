import './style.scss';
import createKey from './components/key/keys';
import regularKeyAction from './components/regular-key-action/regular-key-action';
import capsLockAction from './components/caps-lock-action/caps-lock-action';
import spaceAction from './components/space-action/space-action';
import arrowsAction from './components/arrows-action/arrows-action';

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
  const capsLockKey = document.querySelector('.key[data-value = capslock]');
  const capsLockIndicator = document.createElement('div');
  capsLockIndicator.classList.add('capslock-indicator');
  capsLockKey.append(capsLockIndicator);
}
renderKeys();

// sync keys with physical keyboard
window.addEventListener('keydown', (event) => {
  const pressedKeys = document.querySelectorAll(`div[data-value = '${event.key.toLowerCase()}']`);
  pressedKeys.forEach((el) => el.classList.add('active'));
});

window.addEventListener('keyup', (event) => {
  const pressedKeys = document.querySelectorAll(`div[data-value = '${event.key.toLowerCase()}']`);
  pressedKeys.forEach((el) => el.classList.remove('active'));
});

// add regular keys action
keyboard.addEventListener('click', (event) => {
  const caps = document.querySelector('.capslock-indicator').classList.contains('active');
  let shift = false;
  if (event.shiftKey) shift = true;
  const target = event.target.closest('.key');
  regularKeyAction(target, shift, caps);
});

// add caps lock action
keyboard.addEventListener('click', (event) => {
  if (event.target.closest('.key') === document.querySelector('.key[data-value = capslock]')) capsLockAction();
});
window.addEventListener('keydown', (event) => {
  if (event.key === 'CapsLock') capsLockAction();
});

// add space action
keyboard.addEventListener('click', (event) => {
  if (event.target.closest('.key') === document.querySelector('.spacebar')) spaceAction();
});

// add arrows actoin
keyboard.addEventListener('click', (event) => {
  if (
    event.target.closest('.key') === document.querySelector('.key[data-value = arrowup]')
    || event.target.closest('.key') === document.querySelector('.key[data-value = arrowdown]')
    || event.target.closest('.key') === document.querySelector('.key[data-value = arrowleft]')
    || event.target.closest('.key') === document.querySelector('.key[data-value = arrowright]')
  ) arrowsAction(event.target);
});
window.addEventListener('keydown', (event) => {
  if (event.key.includes('Arrow')) {
    event.preventDefault();
    const element = document.querySelector(`.key[data-value = ${event.key.toLocaleLowerCase()}]`);
    arrowsAction(element);
  }
});
