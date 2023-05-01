export default function tabAction(focus) {
  const textArea = document.querySelector('.text-area');
  const tab = '    ';
  textArea.value = (textArea.value.slice(0, focus) + tab
  + textArea.value.slice(focus, textArea.value.length));
}
