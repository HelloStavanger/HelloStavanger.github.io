const textElement = document.querySelector(".textElement");
const fillElement = document.querySelector(".fillElement");
const originalText = ' World");';
const newText = ' Stavanger");';
const initialText = 'printf("Hello World");';

let phase = "erasing";
let eraseIndex = originalText.length;
let typeIndex = 0;
let spaces = Array(28).join("&nbsp;");
const typeWriterPause = 200;

function typeInitialText() {
  if (typeIndex < initialText.length) {
    // Type the text
    textElement.textContent = initialText.slice(0, typeIndex + 1);
    typeIndex++;
    spaces = Array(28 - textElement.textContent.length).join("&nbsp;");
    fillElement.innerHTML = spaces;
    setTimeout(typeInitialText, typeWriterPause);
  } else {
    typeIndex = 0;
    setTimeout(typeWriterEffect, 2000);
  }
}

function typeWriterEffect() {
  if (phase === "erasing") {
    if (eraseIndex > 0) {
      // Erase one character
      textElement.textContent =
        'printf("Hello' + originalText.slice(0, eraseIndex);
      eraseIndex--;
      spaces = Array(28 - textElement.textContent.length).join("&nbsp;");
      fillElement.innerHTML = spaces;
      setTimeout(typeWriterEffect, typeWriterPause);
    } else {
      phase = "typing";
      setTimeout(typeWriterEffect, typeWriterPause);
    }
  } else if (phase === "typing") {
    if (typeIndex < newText.length) {
      textElement.textContent += newText.charAt(typeIndex);
      spaces = Array(29 - textElement.textContent.length).join("&nbsp;");
      fillElement.innerHTML = spaces;
      typeIndex++;
      setTimeout(typeWriterEffect, typeWriterPause);
    } else {
      const additionalDiv = document.querySelector(".additional-div");
      setTimeout(() => {
        additionalDiv.classList.add("fade-in");
      }, 500);
    }
  }
}

document
  .getElementById("revealLink")
  .addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(".new-content-div").scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  });

window.onload = function () {
  fillElement.innerHTML = spaces;
  setTimeout(typeInitialText, 2000);
};
