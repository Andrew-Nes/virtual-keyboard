export default function arrowsAction(element) {
  const textArea = document.querySelector('.text-area');
  textArea.value += element.innerText[0];
}
