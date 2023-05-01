export default function getCursorPosition() {
  const textArea = document.querySelector('.text-area');
  const cursorPosition = textArea.selectionStart;
  return cursorPosition;
}
