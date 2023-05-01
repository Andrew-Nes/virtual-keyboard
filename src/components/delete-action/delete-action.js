export default function deleteAction(focus) {
  const textArea = document.querySelector('.text-area');
  textArea.value = (textArea.value.slice(0, focus)
  + textArea.value.slice(focus + 1, textArea.value.length));
}
