export default function enterAction() {
  const textArea = document.querySelector('.text-area');
  const linebreak = '\n';
  textArea.value += linebreak;
}
