export default function enterAction(focus) {
  const textArea = document.querySelector('.text-area');
  const linebreak = '\n';
  textArea.value = (textArea.value.slice(0, focus) + linebreak
  + textArea.value.slice(focus, textArea.value.length));
}
