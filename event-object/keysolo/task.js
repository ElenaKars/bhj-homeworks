class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector(".word");
    this.winsElement = container.querySelector(".status__wins");
    this.lossElement = container.querySelector(".status__loss");
    this.timerElement = container.querySelector("#timer");
    this.interval = null;
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener("keydown", (evt) => {
      if (
        evt.key.toUpperCase() === this.currentSymbol.textContent.toUpperCase()
      ) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct");
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert("Победа!");
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert("Вы проиграли!");
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    clearInterval(this.interval);

    const word = this.getWord();

    this.setTimer(word.length);

    this.renderWord(word);
  }

  getWord() {
    const words = [
        "bob",
        "awesome",
        "netology",
        "hello",
        "kitty",
        "rock",
        "youtube",
        "popcorn",
        "cinema",
        "love" ,
        "javascript"
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  setTimer(seconds) {
    this.timerElement.textContent = seconds;

    this.interval = setInterval(() => {
      if(+this.timerElement.textContent <= 0){
        this.fail();
        return;
      }

      this.timerElement.textContent = +this.timerElement.textContent - 1;
    }, 1000)
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? "symbol_current" : ""}">${s}</span>`
      )
      .join("");
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector(".symbol_current");
  }
}

new Game(document.getElementById("game"));
