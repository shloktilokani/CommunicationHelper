/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons with the class 'comm-button'
  const buttons = document.querySelectorAll(".comm-button");

  // Get the browser's speech synthesis feature
  const synth = window.speechSynthesis;

  // Check if the browser supports speech synthesis
  if (!synth) {
    alert(
      "Sorry, your browser does not support speech synthesis. Please try Chrome or Firefox."
    );
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the text from the button that was clicked
      const textToSpeak = button.innerText;

      // Create a new speech request
      const utterance = new SpeechSynthesisUtterance(textToSpeak);

      // Set the language to Hindi (India) for the correct accent
      utterance.lang = "hi-IN";

      // Set the voice speed (1 is normal)
      utterance.rate = 0.9;

      // Make the browser speak
      synth.speak(utterance);
    });
  });
});
