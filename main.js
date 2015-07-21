var showCards = document.getElementById("cards");

showCards.onclick = function(){
  cards.innerHTML = "Re-Deal";
  var cardContainer = document.getElementById('container');
  cardContainer.innerHTML = "";
  displayCards();
  if(document.getElementById('clearCards') === null) {
    createReset();
  };
};

function createReset() {
  var buttonReset = document.createElement('button');
    buttonReset.innerHTML = 'Reset';

  buttonReset.setAttribute('id', 'clearCards');
      document.body.insertBefore(buttonReset, document.body.children[1]);
    buttonReset.onclick = function() {
      document.getElementById('container').innerHTML = "";
      document.body.removeChild(buttonReset);

    document.getElementById('cards').innerHTML = "Deal";

  };

}

function displayCards(){
  var deck = newDeck();
  var shuffledCards = shuffleCards(deck);

  for(var i=0; i < deck.length; i++){
    var card = document.createElement('div');
    card.className = "card";
    var cardContainer = document.getElementById('container');
    cardContainer.appendChild(card);
    card.style.backgroundImage = "url(images/" + shuffledCards[i].suit + "-" + shuffledCards[i].card + ".png" + ")";

  }
}


// Creates a deck of 52 cards
function newDeck(){

  var ranks = [
    {card:"a"},
    {card:"2"},
    {card:"3"},
    {card:"4"},
    {card:"5"},
    {card:"6"},
    {card:"7"},
    {card:"8"},
    {card:"9"},
    {card:"10"},
    {card:"j"},
    {card:"q"},
    {card:"k"}
  ];

  var suits = [ "d", "c", "s", "h"];
  var deck = [];

for(i = 0; i <= (ranks.length - 1); i++){
     for(j = 0; j <= suits.length - 1; j++){
//       // deck.push({suits[i]}, ranks[i])l
//       // debugger;
      ranks[i].suit = suits[j];
      deck.push({card: ranks[i].card, suit: ranks[i].suit});
 }
//         //take rank and suit and put into key value pair
//  console.log(suits[i]);
 // debugger;
 }
  return deck;
 };
newDeck();


// Shuffles the Deck
function shuffleCards(newDeck){
    var m = newDeck.length;
    while (m) {
      var i = Math.floor(Math.random() * m--);
      var t = newDeck[m];
      newDeck[m] = newDeck[i];
      newDeck[i] = t;
    }
    return newDeck;
};

// console.log(displayCards());




