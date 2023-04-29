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
  }
  key.classList.add(`${element.size}`);
  keyboard.append(key);
}
