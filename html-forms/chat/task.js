const widgetEl = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const input = document.querySelector(".chat-widget__input");
const containerEl = document.querySelector(".chat-widget__messages-container");

const botMessages = ["иии", "ок", "не понимаю", "еще раз"];

widgetEl.addEventListener("click", () => {
  widgetEl.classList.add("chat-widget_active");
});

const botResponse = () => {
  let index = Math.floor(Math.random() * botMessages.length);
  messages.innerHTML += `
<div class="message message__text">
  <div class="message__time">${time()}</div>
  <div class="message__text">${botMessages[index]}</div>
  </div>`;
  containerEl.scrollTop = containerEl.scrollHeight;
};

const sendAction = (event) => {
  if (event.key !== "Enter") {
    return;
  }
  const text = input.value.trim();
  if (!text) {
    return;
  }
  input.value = "";
  messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time()}</div>
    <div class="message__text">${text}</div>
</div>
`;
  botResponse();
};

const time = () => {
  const newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes}`;
};

widgetEl.addEventListener("keyup", sendAction);
