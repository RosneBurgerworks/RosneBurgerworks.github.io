const strings = [
  "dsc.gg/rosnehook",
  "youtube.com/@RosneGaming",
  "github.com/rosne-gamingyt",
  "ROSNEHOOK"
];

const audios = [
  "https://cdn.discordapp.com/attachments/1146241641888350269/1167526427743232052/MICSPAM_V2.mp3",
  "https://cdn.discordapp.com/attachments/1146241641888350269/1167878627380174858/1028.mp3",
]

$(document).ready(function() {
  $.getJSON("https://wtfismyip.com/json", function(data) {
      strings.push("NICE IP BRO: "+data.YourFuckingIPAddress+"?");
  });
});

const typingText = document.getElementById('typing-text');
const typingIndicator = document.getElementById('typing-indicator');
let currentStringIndex = 0;
let currentCharIndex = 0;

function typeNextChar() {
  const currentString = strings[currentStringIndex];

  if (currentCharIndex <= currentString.length) {
      typingText.innerHTML = currentString.substring(0, currentCharIndex);
      currentCharIndex++;
      setTimeout(typeNextChar, 100);
  } else {
      setTimeout(deleteLastChar, 2000);
  }
}

function deleteLastChar() {
  if (currentCharIndex >= 0) {
      typingText.innerHTML = strings[currentStringIndex].substring(0, currentCharIndex);
      currentCharIndex--;
      setTimeout(deleteLastChar, 50);
  } else {
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      setTimeout(typeNextChar, 1000);
  }
}

typeNextChar();

const audioElement = document.getElementById("audioplayer");
var randomIndex = Math.floor(Math.random() * audios.length);
audioElement.src = audios[randomIndex];
audioElement.loop = true;
