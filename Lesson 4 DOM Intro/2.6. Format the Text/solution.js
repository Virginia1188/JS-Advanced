function solve() {
  const textToFormat = document.getElementById('input').value;

  let arrOfText = textToFormat.split('.').filter((p) => p.length > 0);
  let index = 0;
  let currentSentance = '';
  for (const sentance of arrOfText) {

    currentSentance += sentance + '. ';
    index++;
    if (index > 2) {
      document.getElementById('output').innerHTML += `<p>${currentSentance}</p>\n`;
      currentSentance = '';
      index = 0;
    }

  }
  let finalString = currentSentance.slice(0, currentSentance.length - 2);
  document.getElementById('output').innerHTML += `<p>${finalString}</p>\n`;

}