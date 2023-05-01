import getCursorPosition from '../get-cursor-position/get-cursor-position';

export default function backspaceAction() {
  const textArea = document.querySelector('.text-area');
  textArea.value = textArea.value.slice(0, getCursorPosition() - 1)
  + textArea.value.slice(getCursorPosition(), textArea.value.length);
}
