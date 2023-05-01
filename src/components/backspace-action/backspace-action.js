export default function backspaceAction() {
  const textArea = document.querySelector('.text-area');
  textArea.value = textArea.value.slice(0, textArea.value.length - 1);
}
