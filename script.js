"use strict";

const textElement = document.createElement("span");
const fillElement = document.createElement("span");

const additionalDiv = document.querySelector(".additional-div");
const bodyElement = document.querySelector("body");

const originalText = ' World");';
const stavanger = "Stavanger";
const initialText = 'printf("Hello World");';

let eraseIndex = originalText.length;
let typeIndex = 0;
const typeWriterPause = 200;

const bufferLength = 28;
let buffer = Array(bufferLength).join(" ");
let cursorIndex = 0;
let cursor = document.createElement("span");
cursor.classList.add("cursor");
cursor.innerHTML = "&nbsp;";

const displayElement = document.querySelector(".console-text");
displayElement.appendChild(textElement);
displayElement.appendChild(cursor);
displayElement.appendChild(fillElement);
printBuffer();

function printBuffer() {
  textElement.innerHTML = buffer.slice(0, cursorIndex);
  if (
    buffer[cursorIndex] === " " ||
    buffer[cursorIndex] === undefined ||
    buffer[cursorIndex] === ""
  ) {
    cursor.innerHTML = "&nbsp;";
  } else {
    cursor.innerHTML = buffer[cursorIndex];
  }
  fillElement.innerHTML = buffer.slice(cursorIndex + 1).replace(/ /g, "&nbsp;");
}

function typeInitialText() {
  if (typeIndex < initialText.length) {
    // Type the text
    buffer =
      buffer.slice(0, typeIndex) +
      initialText.slice(typeIndex, typeIndex + 1) +
      buffer.slice(typeIndex + 1);
    typeIndex++;
    cursorIndex++;
    printBuffer();
    setTimeout(typeInitialText, typeWriterPause);
  } else {
    setTimeout(typeWriterEffect, 1000);
  }
}

let phase = "backspacing";
function typeWriterEffect() {
  if (phase === "backspacing") {
    cursorIndex--;
    printBuffer();
    if (cursorIndex > 19) {
      setTimeout(typeWriterEffect, typeWriterPause * 4);
    } else {
      phase = "erasing";
      setTimeout(typeWriterEffect, typeWriterPause * 2);
    }
  } else if (phase === "erasing") {
    if (cursorIndex > 13) {
      // Erase one character
      cursorIndex--;
      buffer =
        buffer.slice(0, cursorIndex) + buffer.slice(cursorIndex + 1) + " ";
      printBuffer();
      setTimeout(typeWriterEffect, typeWriterPause * 2);
    } else {
      phase = "typing";
      typeIndex = 0;
      setTimeout(typeWriterEffect, typeWriterPause);
    }
  } else if (phase === "typing") {
    if (typeIndex < stavanger.length) {
      buffer =
        buffer.slice(0, cursorIndex) +
        stavanger.slice(typeIndex, typeIndex + 1) +
        buffer.slice(cursorIndex, bufferLength - 2);
      typeIndex++;
      cursorIndex++;
      printBuffer();
      setTimeout(typeWriterEffect, typeWriterPause);
    } else {
      phase = "backspacingAgain";
      setTimeout(typeWriterEffect, typeWriterPause);
    }
  } else if (phase === "backspacingAgain") {
    cursorIndex--;
    printBuffer();
    if (cursorIndex > 8) {
      setTimeout(typeWriterEffect, typeWriterPause);
    } else {
      phase = "hashtag";
      setTimeout(typeWriterEffect, typeWriterPause * 2);
    }
  } else if (phase === "hashtag") {
    buffer =
      buffer.slice(0, cursorIndex) +
      "#" +
      buffer.slice(cursorIndex, bufferLength - 2);
    typeIndex++;
    cursorIndex++;
    printBuffer();
    phase = "end";
    setTimeout(typeWriterEffect, typeWriterPause);
  } else if (phase === "end") {
    cursorIndex = buffer.length - 1;
    printBuffer();
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
  setTimeout(typeInitialText, 500);
  setTimeout(() => {
    additionalDiv.classList.add("fade-in");
  }, 750);
};
