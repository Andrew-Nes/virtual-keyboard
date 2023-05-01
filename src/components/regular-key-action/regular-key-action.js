export default function regularKeyAction(element, shift, caps) {
  if (!element) throw new Error('ooops, you missclicked the key');
  const textArea = document.querySelector('.text-area');
  if (element.dataset.value.length < 2 && element.dataset.value !== ' ') {
    let textToAdd = element.innerText[0].toLowerCase();
    if (element.dataset.altvalue && shift) {
      textToAdd = element.lastChild.innerText;
    }
    if (shift || caps) { textToAdd = textToAdd.toUpperCase(); }
    textArea.value += textToAdd;
  }
}
