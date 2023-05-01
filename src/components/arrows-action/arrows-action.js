export default function arrowsAction(element, focus) {
  const textArea = document.querySelector('.text-area');
  const back = textArea.value.slice(focus, textArea.value.length);
  textArea.value = (textArea.value.slice(0, focus) + element.innerText[0]
  + back);
}
