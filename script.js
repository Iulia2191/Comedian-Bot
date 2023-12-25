const jokes = [
  ["If the internet is a boat, where would they park it?", "Google doc."],
  ["What did the zero say to the eight?", "Nice belt!"],
  ["Why did the scarecrow win an award?", "Because he was outstanding in his field!"],
  ["How does a penguin build its house?", "Igloos it together!"],
  ["What did one wall say to the other wall?", "I'll meet you at the corner!"],
  ["Why don't scientists trust atoms?", "Because they make up everything!"],
  ["What do you call a fake noodle?", "An impasta."],
  ["Why did the bicycle fall over?", "Because it was two-tired."],
  ["How does a penguin drink its cola?", "On the rocks."],
];

const responses = [
  "Sorry, I'm out of jokes for now!",
  "I need some time to think of more jokes.",
  "Hmm, I'm feeling a bit shy today. No more jokes!",
  "Let's switch topics. Any preferences?"
];

const chatContent = document.querySelector(".chat-content");
const jokeButton = document.getElementById("joke-button");

let jokeIndex = 0;
let responseIndex = 0;

function appendBotMessage(messageText) {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-robot message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = messageText;
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
  scrollToBottom();
}

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(avatar, contentDiv);
  chatContent.appendChild(messageDiv);
  scrollToBottom();
}

function requestJoke() {
  appendUserMessage();
  setTimeout(function () {
    appendBotMessage("Ok, got one.");
  }, 1000);
  setTimeout(function () {
    if (jokeIndex < jokes.length) {
      appendBotMessage(jokes[jokeIndex][0]);
    } else {
      appendBotMessage(getNextResponse());
      jokeButton.style.display = "none";
      return;
    }
  }, 1500);
  setTimeout(function () {
    if (jokeIndex < jokes.length) {
      appendBotMessage(jokes[jokeIndex][1]);
      jokeIndex++;
    } else {
      appendBotMessage(getNextResponse());
      jokeButton.style.display = "none";
    }
  }, 2000);
}

function getNextResponse() {
  const response = responses[responseIndex];
  responseIndex = (responseIndex + 1) % responses.length;
  return response;
}

function scrollToBottom() {
  chatContent.scrollTop = chatContent.scrollHeight;
}

requestJoke();
