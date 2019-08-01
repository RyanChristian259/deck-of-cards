let dealCardsButton = document.getElementById("deal-cards-button");

dealCardsButton.onclick = function() {
  dealCardsButton.innerHTML = "Re-Deal";
  let cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  displayCards();
  if (!document.getElementById("clearCards")) {
    resetCards();
  }
};

function displayCards() {
  let deck = newDeck();
  let shuffledCards = shuffleCards(deck);

  for (let i = 0; i < deck.length; i++) {
    let card = document.createElement("div");
    card.className = "card";
    let cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(card);
    card.style.backgroundImage =
      "url(images/" +
      shuffledCards[i].suit +
      "-" +
      shuffledCards[i].card +
      ".png" +
      ")";
  }
}

function resetCards() {
  // Create reset button in DOM
  let buttonReset = document.createElement("button");
  buttonReset.innerHTML = "Reset";

  buttonReset.setAttribute("id", "clearCards");
  document.body.insertBefore(buttonReset, document.body.children[1]);
  buttonReset.onclick = function() {
    document.getElementById("card-container").innerHTML = "";
    document.body.removeChild(buttonReset);

    document.getElementById("deal-cards-button").innerHTML = "Deal Cards";
  };
}

// Creates a deck of 52 cards
function newDeck() {
  let ranks = [
    { card: "a" },
    { card: "2" },
    { card: "3" },
    { card: "4" },
    { card: "5" },
    { card: "6" },
    { card: "7" },
    { card: "8" },
    { card: "9" },
    { card: "10" },
    { card: "j" },
    { card: "q" },
    { card: "k" }
  ];

  let suits = ["d", "c", "s", "h"];
  let deck = [];

  for (let i = 0; i <= ranks.length - 1; i++) {
    for (let j = 0; j <= suits.length - 1; j++) {
      ranks[i].suit = suits[j];
      deck.push({ card: ranks[i].card, suit: ranks[i].suit });
    }
  }
  return deck;
}

// Shuffle the Deck
function shuffleCards(deck) {
  let deckLength = deck.length;
  while (deckLength) {
    let i = Math.floor(Math.random() * deckLength--);
    let t = deck[deckLength];
    deck[deckLength] = deck[i];
    deck[i] = t;
  }
  return deck;
}
