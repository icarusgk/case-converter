const download = (filename, text) => {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const upperCaseText = text => text.toUpperCase();

const lowerCaseText = text => text.toLowerCase();

const properCaseText = text => {
  let words = text.split(" ");
  words = words.filter(word => word !== "");

  // Map instead
  words.forEach((word, i) => {
    words[i] = word[0].toUpperCase() + word.slice(1);
  });

  return words.join(" ");
}

const sentenceCaseText = text => {
  let sentences = text.split(".");

  if (sentences[sentences.length - 1] === "") {
    sentences.pop();
  }

  sentences.forEach((word, i) => {
    word = word.trim();
    sentences[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
  });

  return sentences.join(". ") + ".";
}

let textarea = document.querySelector("textarea");

let upperButton = document.querySelector("#upper-case");
let lowerButton = document.querySelector("#lower-case");
let properButton = document.querySelector("#proper-case");
let sentenceButton = document.querySelector("#sentence-case");
let downloadButton = document.querySelector("#save-text-file");

upperButton.addEventListener("click", () => {
  textarea.value = upperCaseText(textarea.value);
});

lowerButton.addEventListener("click", () => {
  textarea.value = lowerCaseText(textarea.value);
});

properButton.addEventListener("click", () => {
  textarea.value = (properCaseText(textarea.value));
});
sentenceButton.addEventListener("click", () => {
  textarea.value = sentenceCaseText(textarea.value);
});

downloadButton.addEventListener("click", () => {
  download("text.txt", textarea.value);
});