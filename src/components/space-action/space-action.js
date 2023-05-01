export default function spaceAction(focus) {
  const textArea = document.querySelector('.text-area');
  const space = ' ';
  textArea.value = (textArea.value.slice(0, focus) + space
  + textArea.value.slice(focus, textArea.value.length));
}
