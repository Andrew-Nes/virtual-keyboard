import './key.scss';

export default function createKey(element) {
  const keyboard = document.querySelector('.keyboard');
  const key = document.createElement('div');
  key.classList.add('key');
  key.innerHTML = `${element.value}`;
  if (element.alt) {
    const keyAlt = document.createElement('span');
    keyAlt.classList.add('key-alt');
    keyAlt.innerHTML = `${element.alt}`;
    key.append(keyAlt);
    key.setAttribute('data-altvalue', `${element.alt}`);
  }
  if (element.value === 'Win') {
    key.setAttribute('data-value', 'meta');
  } else if (element.value === '↑') {
    key.setAttribute('data-value', 'arrowup');
  } else if (element.value === '↓') {
    key.setAttribute('data-value', 'arrowdown');
  } else if (element.value === '→') {
    key.setAttribute('data-value', 'arrowright');
  } else if (element.value === '←') {
    key.setAttribute('data-value', 'arrowleft');
  } else key.setAttribute('data-value', `${element.value.toLowerCase()}`);
  key.classList.add(`${element.size}`);
  keyboard.append(key);
}
